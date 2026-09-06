import { supabaseAdmin } from '@/lib/supabase/client';

/**
 * Triggers the fulfillment process for a given order.
 * This operation is idempotent: it will only trigger fulfillment once per order.
 * 
 * @param orderId The UUID of the order to fulfill.
 * @returns {Promise<{ success: boolean; message: string }>}
 */
export async function triggerFulfillment(orderId: string) {
  if (!supabaseAdmin) {
    return { success: false, message: 'Database not configured' };
  }

  // 1. Idempotency Check: Attempt to create a 'pending' log entry.
  // The UNIQUE(order_id) constraint on fulfillment_logs ensures this only succeeds once.
  const { error: idempotencyError } = await supabaseAdmin
    .from('fulfillment_logs')
    .insert({
      order_id: orderId,
      status: 'pending',
      request_payload: { action: 'initiate_fulfillment' },
    });

  if (idempotencyError) {
    // If the error is a unique constraint violation, fulfillment has already been triggered.
    if (idempotencyError.code === '23505') {
      console.log(`Fulfillment already triggered for Order ID: ${orderId}. Skipping.`);
      return { success: true, message: 'Fulfillment already triggered.' };
    }
    console.error(`Database error during idempotency check for Order ${orderId}: ${idempotencyError.message}`);
    throw idempotencyError;
  }

  try {
    // 2. Gather Order Details for the Portal
    const { data: order, error: orderError } = await supabaseAdmin
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .eq('id', orderId)
      .single();

    if (orderError || !order) {
      throw new Error(`Could not retrieve order details: ${orderError?.message || 'Order not found'}`);
    }

    const payload = {
      orderId: order.id,
      stripeSessionId: order.stripe_session_id,
      amount: order.total_amount,
      currency: order.currency,
      items: order.order_items,
      metadata: order.metadata,
      timestamp: new Date().toISOString(),
    };

    // 3. Notify Fusion Fulfillment Portal
    // Note: FUSION_PORTAL_URL and FUSION_PORTAL_API_KEY should be in the environment variables.
    const portalUrl = process.env.FUSION_PORTAL_URL || 'https://api.fusion-portal.hhs.systems/v1/fulfill';
    const portalApiKey = process.env.FUSION_PORTAL_API_KEY;

    if (!portalApiKey) {
      console.warn('⚠️ FUSION_PORTAL_API_KEY is missing. Simulating portal request.');
      // Simulate a successful response for demo/dev purposes if key is missing
      await simulatePortalRequest(payload);
    } else {
      const response = await fetch(portalUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${portalApiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Portal responded with ${response.status}: ${errorText}`);
      }

      const responseData = await response.json();
      
      // 4. Update log to success
      await supabaseAdmin
        .from('fulfillment_logs')
        .update({
          status: 'success',
          response_payload: responseData,
        })
        .eq('order_id', orderId);
    }

    return { success: true, message: 'Fulfillment triggered successfully.' };

  } catch (error: any) {
    console.error(`❌ Fulfillment failed for Order ${orderId}: ${error.message}`);

    // 5. Update log to failed
    await supabaseAdmin
      .from('fulfillment_logs')
      .update({
        status: 'failed',
        error_message: error.message,
      })
      .eq('order_id', orderId);

    return { success: false, message: error.message };
  }
}

/**
 * Mock function to simulate a portal request when API keys are missing.
 */
async function simulatePortalRequest(payload: any) {
  console.log('[SIMULATION] Sending fulfillment request to Fusion Portal:', JSON.stringify(payload, null, 2));
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Update the log to simulate a successful API response
  const orderId = payload.orderId;
  await supabaseAdmin!
    .from('fulfillment_logs')
    .update({
      status: 'success',
      response_payload: {
        status: 'accepted',
        tracking_id: `FUSE-${Math.random().toString(36).toUpperCase().substring(2, 10)}`,
        message: 'Order received by Fusion Portal simulation.',
      },
    })
    .eq('order_id', orderId);
}
