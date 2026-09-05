'use client';

import React, { useState, createContext, useContext } from 'react';
import { CartDrawer } from '@/components/CartDrawer';
import { useCart } from '@/lib/commerce/cart-store';

interface CartContextType {
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ openCart, closeCart, isOpen }}>
      {children}
      <CartDrawer isOpen={isOpen} onClose={closeCart} />
    </CartContext.Provider>
  );
};

export const useCartUI = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartUI must be used within a CartProvider');
  }
  return context;
};
