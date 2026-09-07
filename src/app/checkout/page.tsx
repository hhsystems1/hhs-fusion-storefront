'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { useCart } from '@/lib/commerce/cart-store';
import { getShowcaseProduct, formatPrice } from '@/lib/commerce/products';

export default function CheckoutPage() {
  const router = useRouter();
  const { items } = useCart();

  const unique = useMemo(() => {
    const map = new Map<string, (typeof items)[number]>();
    items.forEach((item) => map.set(item.id, item));
    return [...map.values()];
  }, [items]);

  const canRedirect =
    unique.length === 1 && Boolean(getShowcaseProduct(unique[0].id)?.paymentLink);

  useEffect(() => {
    if (unique.length === 0) {
      router.replace('/products');
      return;
    }
    if (canRedirect) {
      const product = getShowcaseProduct(unique[0].id);
      if (product?.paymentLink) {
        window.location.href = product.paymentLink;
      }
    }
  }, [unique, canRedirect, router]);

  if (unique.length === 0) {
    return null;
  }

  if (canRedirect) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <Loader2 className="w-12 h-12 text-hhs-blue animate-spin mb-4" />
        <h1 className="text-2xl font-bold text-hhs-slate-900 mb-2">Taking you to secure checkout...</h1>
        <p className="text-hhs-slate-600">Redirecting you to Stripe for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-hhs-slate-900 mb-2">Complete Your Order</h1>
        <p className="text-hhs-slate-600 mb-8">
          This store checks out each product through its own secure Stripe payment. Finish them one at a time below.
        </p>

        <div className="space-y-4">
          {unique.map((item) => {
            const product = getShowcaseProduct(item.id);
            const Icon = product?.icon;

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl border border-hhs-slate-200 bg-white p-5 shadow-sm"
              >
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl ${product ? `bg-gradient-to-br ${product.gradient}` : 'bg-hhs-slate-100'}`}>
                  {Icon ? <Icon className="h-8 w-8 text-white" strokeWidth={1.5} /> : null}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-bold text-hhs-slate-900">{item.name}</div>
                  <div className="text-sm text-hhs-slate-500">
                    {item.price !== null ? formatPrice(item.price) : 'Priced at checkout'}
                    {item.quantity > 1 ? ` · Qty ${item.quantity}` : ''}
                  </div>
                  {product?.paymentLink ? (
                    <a
                      href={product.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-hhs-blue px-4 py-2 text-xs font-bold text-white hover:bg-hhs-blue-dark transition-colors"
                    >
                      Pay for this item <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <p className="mt-2 text-xs text-hhs-slate-400">Not available for checkout yet.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-xs text-hhs-slate-400">
            Sales tax, where applicable, is calculated by Stripe at checkout based on your location.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-hhs-blue hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180" /> Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}