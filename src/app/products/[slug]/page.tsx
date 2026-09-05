import React from 'react';
import { notFound } from 'next/navigation';
import { commerceDb } from '@/lib/commerce/db';

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await commerceDb.products.getBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Media Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-hhs-slate-100 border border-hhs-slate-200">
            <img 
              src={product.image_url || '/placeholder-product.jpg'} 
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.gallery_urls?.map((url: string, idx: number) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-hhs-slate-100 border border-hhs-slate-200">
                <img src={url} alt={`${product.name} ${idx + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-hhs-blue">
              Fusion 44X Series
            </span>
            <h1 className="mt-2 text-4xl font-extrabold text-hhs-slate-900 tracking-tight">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline gap-4">
              <span className="text-3xl font-bold text-hhs-blue">
                ${product.price.toFixed(2)}
              </span>
              {product.compare_at_price && (
                <span className="text-lg text-hhs-slate-400 line-through">
                  ${product.compare_at_price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-slate mb-8">
            <p className="text-lg text-hhs-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-auto space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-hhs-slate-100 border border-hhs-slate-200">
                <span className="block text-xs font-semibold text-hhs-slate-500 uppercase">Weight</span>
                <span className="text-sm font-bold text-hhs-slate-900">{product.weight_oz} oz</span>
              </div>
              <div className="p-4 rounded-lg bg-hhs-slate-100 border border-hhs-slate-200">
                <span className="block text-xs font-semibold text-hhs-slate-500 uppercase">Availability</span>
                <span className="text-sm font-bold text-green-600">
                  {product.stock_quantity > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <button 
              disabled={product.stock_quantity <= 0}
              className="w-full py-4 px-8 rounded-xl bg-hhs-blue text-white font-bold text-lg hover:bg-hhs-blue-dark transition-all disabled:bg-hhs-slate-300 disabled:cursor-not-allowed shadow-lg shadow-hhs-blue/20"
            >
              {product.stock_quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
