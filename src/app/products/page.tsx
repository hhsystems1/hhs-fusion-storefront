import React from 'react';
import { showcaseProducts } from '@/lib/commerce/products';
import { ProductGlassCard } from '@/components/ProductGlassCard';

export default async function ProductsPage() {
  return (
    <div className="bg-hhs-slate-50 pb-16">
      <div className="mx-auto max-w-6xl px-4 pt-14 text-center sm:pt-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-5xl">
          Fusion <span className="text-hhs-blue">44X</span> Collection
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-hhs-slate-500">
          Premium water experiences sized for the compact homes of Colorado and Texas.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden bg-hhs-blue-dark px-4 pb-16 pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(51,102,153,0.45),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseProducts.map((product) => (
            <ProductGlassCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}