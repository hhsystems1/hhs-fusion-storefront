import { Suspense } from 'react';
import Link from 'next/link';
import { commerceDb } from '@/lib/commerce/db';
import { CheckCircle2, Package, ArrowRight } from 'lucide-react';

async function SuccessContent() {
  // Note: In a real Next.js App Router page, we'd use searchParams prop in the page component.
  // Since this is a server component, we'll handle the logic in the page.tsx and pass it here, 
  // or use a Client Component for the search params part.
  // Let's make the Page a server component and the Content a server component receiving searchParams.
  return null; // Placeholder, actual logic in page.tsx
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sessionId = searchParams.session_id as string;
  
  if (!sessionId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-2xl font-semibold text-hhs-slate-900 mb-4">Order Not Found</h1>
        <p className="text-hhs-slate-600 mb-8">We couldn't find the order details for this session.</p>
        <Link 
          href="/products" 
          className="px-6 py-3 bg-hhs-blue text-white rounded-full font-medium hover:bg-hhs-blue/90 transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  // Fetch order details on the server
  const order = await commerceDb.orders.getBySessionId(sessionId);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-2xl font-semibold text-hhs-slate-900 mb-4">Order Processing</h1>
        <p className="text-hhs-slate-600 mb-8">Your payment was successful, but we're still finalizing your order. Please check back in a moment.</p>
        <Link 
          href="/products" 
          className="px-6 py-3 bg-hhs-blue text-white rounded-full font-medium hover:bg-hhs-blue/90 transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-hhs-slate-100">
        <div className="bg-hhs-blue py-12 px-6 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Thank You for Your Order!</h1>
          <p className="text-hhs-slate-100 text-lg opacity-90">
            Your order has been placed successfully and is being processed.
          </p>
        </div>

        <div className="p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-hhs-slate-50 border border-hhs-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Package className="w-5 h-5 text-hhs-blue" />
              </div>
              <div>
                <p className="text-sm text-hhs-slate-500 font-medium uppercase tracking-wider">Order ID</p>
                <p className="text-lg font-semibold text-hhs-slate-900">{order.id.slice(0, 8).toUpperCase()}...</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-hhs-slate-50 border border-hhs-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <div className="w-5 h-5 flex items-center justify-center font-bold text-hhs-blue text-xs">USD</div>
              </div>
              <div>
                <p className="text-sm text-hhs-slate-500 font-medium uppercase tracking-wider">Total Amount</p>
                <p className="text-lg font-semibold text-hhs-slate-900">${parseFloat(order.total_amount).toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-hhs-slate-600 mb-8">
              We'll send a confirmation email shortly. You can track your order status using the button below.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={`/orders/${order.secure_hash}`} 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-hhs-blue text-white rounded-full font-bold hover:bg-hhs-blue/90 transition-all hover:scale-105 shadow-lg shadow-hhs-blue/20"
              >
                Track Order Status <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/products" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-hhs-slate-600 font-semibold hover:text-hhs-blue transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
