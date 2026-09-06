'use client';

import { useState } from 'react';
import { Check, MinusCircle, ShoppingCart } from 'lucide-react';
import { CartItemInput, useCart } from '@/lib/commerce/cart-store';

interface AddToCartButtonProps {
  product: CartItemInput;
  label?: string;
  className?: string;
}

type Status = 'idle' | 'added' | 'max';

export const AddToCartButton = ({ product, label = 'Add to Cart', className = '' }: AddToCartButtonProps) => {
  const [status, setStatus] = useState<Status>('idle');

  const handleAdd = () => {
    const cart = useCart.getState();
    const existing = cart.items.find((item) => item.id === product.id);

    if (product.maxQuantity && (existing?.quantity ?? 0) >= product.maxQuantity) {
      setStatus('max');
      window.setTimeout(() => setStatus('idle'), 1800);
      return;
    }

    cart.addItem(product);
    setStatus('added');
    window.setTimeout(() => setStatus('idle'), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center justify-center gap-1.5 ${className}`}
    >
      {status === 'added' ? (
        <Check className="h-4 w-4" />
      ) : status === 'max' ? (
        <MinusCircle className="h-4 w-4" />
      ) : (
        <ShoppingCart className="h-4 w-4" />
      )}
      {status === 'added' ? 'Added!' : status === 'max' ? 'One per home' : label}
    </button>
  );
};