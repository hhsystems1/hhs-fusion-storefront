import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { ShowcaseProduct, formatPrice } from '@/lib/commerce/products';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductShowcaseCardProps {
  product: ShowcaseProduct;
}

export const ProductShowcaseCard = ({ product }: ProductShowcaseCardProps) => {
  const Icon = product.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-hhs-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-hhs-slate-900/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-hhs-slate-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/50 bg-white/25 shadow-xl shadow-black/10 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-hhs-slate-200 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-hhs-slate-600 backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-hhs-slate-900 transition-colors group-hover:text-hhs-blue">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-hhs-slate-500">{product.tagline}</p>

        <div className="mt-auto flex items-baseline gap-2 pt-3">
          {product.price ? (
            <span className="text-2xl font-extrabold tracking-tight text-hhs-slate-900">
              {formatPrice(product.price)}
            </span>
          ) : (
            <span className="text-sm font-semibold text-hhs-slate-500">Replacement refill</span>
          )}
          <span className="text-xs text-hhs-slate-400">via Stripe</span>
        </div>

        <div className="flex flex-col gap-2 pt-3">
          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-hhs-accent px-4 py-3 text-sm font-extrabold text-hhs-blue-dark shadow-md shadow-hhs-accent/25 transition hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" /> Buy Now
          </a>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-hhs-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-hhs-slate-700 transition hover:border-hhs-blue hover:text-hhs-blue"
            >
              View Details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <AddToCartButton
              product={{ id: product.slug, slug: product.slug, name: product.name, price: product.price, maxQuantity: product.maxQuantity ?? null }}
              label="Add to Cart"
              className="w-full rounded-xl border border-hhs-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-hhs-slate-700 transition hover:border-hhs-blue hover:text-hhs-blue"
            />
          </div>
        </div>
      </div>
    </article>
  );
};