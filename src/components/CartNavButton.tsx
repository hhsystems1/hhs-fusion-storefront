'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/commerce/cart-store';
import { useCartUI } from '@/components/CartController';

const CartNavButton = () => {
  const { getTotalItems } = useCart();
  const { openCart } = useCartUI();
  const itemCount = getTotalItems();

  return (
    <button 
      onClick={openCart}
      className="relative flex items-center gap-2 bg-hhs-blue text-white px-4 py-2 rounded-md hover:bg-hhs-blue-dark transition-colors"
    >
      <ShoppingCart size={18} />
      <span className="font-medium">Cart</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-hhs-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartNavButton;
