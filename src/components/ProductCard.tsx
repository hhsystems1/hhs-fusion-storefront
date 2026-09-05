import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/commerce/cart-store';
import { Product } from '@/lib/supabase/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-hhs-slate-200 bg-white transition-all hover:shadow-lg hover:border-hhs-blue/30">
      <div className="aspect-square overflow-hidden bg-hhs-slate-100">
        <img 
          src={product.image_url || '/placeholder-product.jpg'} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-hhs-slate-500">
            Fusion 44X
          </span>
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-hhs-slate-900 group-hover:text-hhs-blue transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="mt-1 text-sm text-hhs-slate-500 line-clamp-2 mb-4">
          {product.short_description || product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.compare_at_price && (
              <span className="text-xs text-hhs-slate-400 line-through">
                ${product.compare_at_price.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-hhs-blue">
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          <button 
            onClick={handleAdd}
            className={`rounded-md px-3 py-2 text-xs font-semibold transition-all ${
              added 
                ? 'bg-green-600 text-white' 
                : 'bg-hhs-blue text-white hover:bg-hhs-blue-dark'
            }`}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};
