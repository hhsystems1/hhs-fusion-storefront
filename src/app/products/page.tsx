import React from 'react';
import Link from 'next/link';
import { commerceDb } from '@/lib/commerce/db';
import { ProductCard } from '@/components/ProductCard';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categorySlug = searchParams.category;
  const products = await commerceDb.products.getAllActive(categorySlug);
  const categories = await commerceDb.categories.getAll();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-5xl">
          Fusion <span className="text-hhs-blue">44X</span> Collection
        </h1>
        <p className="mt-4 text-lg text-hhs-slate-500 max-w-2xl mx-auto">
          High-performance engineering components designed for maximum efficiency and professional reliability.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        <Link 
          href="/products"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !categorySlug 
              ? 'bg-hhs-blue text-white shadow-md' 
              : 'bg-white text-hhs-slate-600 border border-hhs-slate-200 hover:border-hhs-blue hover:text-hhs-blue'
          }`}
        >
          All Products
        </Link>
        {categories.map((cat) => (
          <Link 
            key={cat.id}
            href={`/products?category=${cat.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              categorySlug === cat.slug 
                ? 'bg-hhs-blue text-white shadow-md' 
                : 'bg-white text-hhs-slate-600 border border-hhs-slate-200 hover:border-hhs-blue hover:text-hhs-blue'
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 bg-hhs-slate-100 rounded-xl border-2 border-dashed border-hhs-slate-200">
          <p className="text-hhs-slate-500 font-medium">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
