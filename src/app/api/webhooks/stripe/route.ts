import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import crypto from 'crypto';
import { env } from '@/lib/validation/env';
import { supabaseAdmin } from '@/lib/supabase/client';
import { triggerFulfillment } from '@/lib/commerce/fulfillment';

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2026-08-26.dahlia',
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: any) {
    console.error(`❌ Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    try {
      await handleCheckoutSessionCompleted(session);
    } catch (error: any) {
      console.error(`❌ Error handling checkout.session.completed: ${error.message}`);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const { 
    id: stripeSessionId, 
    amount_total, 
    currency, 
    payment_intent, 
    metadata 
  } = session;

  // 1. Idempotency check: check if order already exists
  const { data: existingOrder } = await supabaseAdmin
    .from('orders')
    .select('id')
    .eq('stripe_session_id', stripeSessionId)
    .single();

  if (existingOrder) {
    console.log(`ℹ️ Order already recorded for session ${stripeSessionId}. Skipping.`);
    return;
  }

  // 2. Fetch line items from Stripe to get product IDs
  const sessionWithLineItems = await stripe.checkout.sessions.retrieve(stripeSessionId, {
    expand: ['line_items.data.price.product'],
  });

  const lineItems = sessionWithLineItems.line_items?.data || [];

  // 3. Record the Order
  const secureHash = crypto.randomBytes(32).toString('hex');

  const { data: order, error: orderError } = await supabaseAdmin
    .from('orders')
    .insert({
      stripe_session_id: stripeSessionId,
      visitor_id: metadata?.visitorId,
      total_amount: amount_total ? amount_total / 100 : 0,
      currency: currency || 'usd',
      payment_intent_id: payment_intent as string,
      status: 'paid',
      secure_hash: secureHash,
      metadata: metadata,
    })
    .select()
    .single();

  if (orderError) {
    throw new Error(`Failed to create order: ${orderError.message}`);
  }

  // 4. Record Order Items
  const orderItemsToInsert = lineItems.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return {
      order_id: order.id,
      product_id: product?.metadata?.productId, // Linked via product metadata
      quantity: item.quantity,
      unit_price: (item.price?.unit_amount || 0) / 100,
    };
  });

  const { error: itemsError } = await supabaseAdmin
    .from('order_items')
    .insert(orderItemsToInsert);

  if (itemsError) {
    throw new Error(`Failed to create order items: ${itemsError.message}`);
  }

  // 5. Trigger Fulfillment Request
  try {
    const fulfillmentResult = await triggerFulfillment(order.id);
    if (!fulfillmentResult.success) {
      console.error(`⚠️ Fulfillment trigger failed for Order ${order.id}: ${fulfillmentResult.message}`);
    } else {
      console.log(`✅ [FULFILLMENT] ${fulfillmentResult.message} for Order ID: ${order.id}`);
    }
  } catch (fulfillmentError: any) {
    console.error(`❌ Critical error during fulfillment trigger for Order ${order.id}: ${fulfillmentError.message}`);
    // We don't throw here because the order is already paid and recorded; 
    // we want the webhook to return 200 to avoid Stripe retries of the whole session logic.
  }
}
