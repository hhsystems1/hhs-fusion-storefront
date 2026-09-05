'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/commerce/cart-store';
import { getVisitorId, getSessionId } from '@/lib/tracking';
import { Loader2 } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initiateCheckout = async () => {
      try {
        if (!items || items.length === 0) {
          setError('Your cart is empty.');
          setLoading(false);
          return;
        }

        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items,
            visitorId: getVisitorId(),
            sessionId: getSessionId(),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to create checkout session');
        }

        if (data.url) {
          window.location.href = data.url;
        } else {
          throw new Error('Checkout URL not received from server');
        }
      } catch (err: any) {
        console.error('Checkout error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    initiateCheckout();
  }, [items, router]);

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="rounded-full bg-red-100 p-3 text-red-600 mb-4">
          <span className="text-2xl font-bold">!</span>
        </div>
        <h1 className="text-2xl font-bold text-hhs-slate-900 mb-2">Checkout Error</h1>
        <p className="text-hhs-slate-600 mb-6">{error}</p>
        <button 
          onClick={() => router.push('/products')}
          className="bg-hhs-blue text-white px-6 py-2 rounded-md font-semibold hover:bg-hhs-blue-dark transition-colors"
        >
          Return to Store
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Loader2 className="w-12 h-12 text-hhs-blue animate-spin mb-4" />
      <h1 className="text-2xl font-bold text-hhs-slate-900 mb-2">Preparing your checkout...</h1>
      <p className="text-hhs-slate-600">Redirecting you to Stripe secure payment gateway.</p>
    </div>
  );
}
