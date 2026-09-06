import React from 'react';
import { showcaseProducts } from '@/lib/commerce/products';
import { ProductShowcaseCard } from '@/components/ProductShowcaseCard';

export default async function ProductsPage() {
  return (
    <div className="bg-white pb-16 text-hhs-slate-900">
      <div className="mx-auto max-w-6xl px-4 pt-14 text-center sm:pt-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Fusion <span className="text-hhs-blue">44X</span> Collection
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-hhs-slate-500">
          Premium water experiences sized for the compact homes of Colorado and Texas.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {showcaseProducts.map((product) => (
          <ProductShowcaseCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}