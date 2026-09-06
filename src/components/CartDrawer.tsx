import React from 'react';
import { useCart } from '@/lib/commerce/cart-store';
import { getShowcaseProduct, formatPrice } from '@/lib/commerce/products';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, getTotalItems } = useCart();

  if (!isOpen) return null;

  const pricedItems = items.filter((item) => item.price !== null);
  const subtotal = pricedItems.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0);
  const hasUnpriced = pricedItems.length !== items.length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition-transform duration-300 ease-in-out">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-hhs-slate-900">Your Cart</h2>
              <button onClick={onClose} className="p-2 text-hhs-slate-400 hover:text-hhs-slate-600">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-hhs-slate-500">Your cart is currently empty.</p>
                  <Link
                    href="/products"
                    className="mt-4 text-hhs-blue font-semibold hover:underline"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => {
                    const product = getShowcaseProduct(item.id);
                    const Icon = product?.icon;

                    return (
                      <li key={item.id} className="flex gap-4">
                        <div className={`flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-md ${product ? `bg-gradient-to-br ${product.gradient}` : 'bg-hhs-slate-100'}`}>
                          {Icon ? (
                            <Icon className="h-9 w-9 text-white" strokeWidth={1.5} />
                          ) : (
                            <span className="text-xs font-bold text-hhs-slate-400">44X</span>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between">
                            <h3 className="text-sm font-bold text-hhs-slate-900">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-hhs-slate-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="mt-1 text-sm text-hhs-slate-500">
                            {item.price !== null ? formatPrice(item.price) : 'Priced at checkout'}
                          </p>
                          <div className="mt-auto flex items-center gap-3">
                            <div className="flex items-center border border-hhs-slate-200 rounded-md">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-hhs-slate-100"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-2 text-xs font-medium">{item.quantity}</span>
                              {(!item.maxQuantity || item.quantity < item.maxQuantity) && (
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:bg-hhs-slate-100"
                                >
                                  <Plus size={14} />
                                </button>
                              )}
                            </div>
                            {item.maxQuantity === 1 && item.quantity >= 1 && (
                              <span className="text-[11px] text-hhs-slate-400">One per home</span>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t p-6">
                {items.length > 1 && (
                  <p className="mb-3 rounded-xl bg-hhs-slate-50 p-3 text-xs text-hhs-slate-500">
                    This store checks out one product at a time. You&apos;ll finish each item&apos;s
                    payment on its own Stripe checkout.
                  </p>
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-hhs-slate-600 font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-hhs-slate-900">
                    {pricedItems.length > 0 ? `$${subtotal.toLocaleString()}` : '—'}
                  </span>
                </div>
                {hasUnpriced && (
                  <p className="mb-4 text-xs text-hhs-slate-400">
                    Some items are priced at checkout.
                  </p>
                )}
                <Link
                  href="/checkout"
                  className="block w-full py-4 px-6 text-center bg-hhs-blue text-white font-bold rounded-xl hover:bg-hhs-blue-dark transition-all shadow-lg shadow-hhs-blue/20"
                >
                  Checkout Now ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                </Link>
                <button
                  onClick={onClose}
                  className="mt-3 w-full py-2 text-sm font-semibold text-hhs-slate-500 hover:text-hhs-slate-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};