import React from 'react';
import { useCart } from '@/lib/commerce/cart-store';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

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
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-hhs-slate-200 bg-hhs-slate-100">
                        <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />
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
                        <p className="mt-1 text-sm text-hhs-slate-500">${item.price.toFixed(2)}</p>
                        <div className="mt-auto flex items-center gap-3">
                          <div className="flex items-center border border-hhs-slate-200 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-hhs-slate-100"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 text-xs font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-hhs-slate-100"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-hhs-slate-600 font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-hhs-slate-900">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <Link 
                  href="/checkout"
                  className="block w-full py-4 px-6 text-center bg-hhs-blue text-white font-bold rounded-xl hover:bg-hhs-blue-dark transition-all shadow-lg shadow-hhs-blue/20"
                >
                  Checkout Now ({getTotalItems()} items)
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
