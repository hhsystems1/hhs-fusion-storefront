import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { ShowcaseProduct, formatPrice } from '@/lib/commerce/products';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductGlassCardProps {
  product: ShowcaseProduct;
}

export const ProductGlassCard = ({ product }: ProductGlassCardProps) => {
  const Icon = product.icon;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.1]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-md shadow-2xl shadow-black/20 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-14 w-14 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="text-sm leading-relaxed text-white/75">{product.tagline}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div>
            {product.price ? (
              <div className="text-2xl font-extrabold tracking-tight text-white">
                {formatPrice(product.price)}
              </div>
            ) : (
              <div className="text-sm font-semibold text-white/70">Replacement refill</div>
            )}
            <div className="text-[11px] text-white/60">via secure Stripe checkout</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-3 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-hhs-accent px-3 py-2.5 text-sm font-bold text-hhs-blue-dark shadow-lg shadow-hhs-accent/30 transition-all hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" /> Buy Now
          </a>
        </div>

        <AddToCartButton
          product={{ id: product.slug, slug: product.slug, name: product.name, price: product.price, maxQuantity: product.maxQuantity ?? null }}
          label="Add to Cart"
          className="w-full rounded-xl border border-white/25 bg-white/10 px-3 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
        />
      </div>
    </div>
  );
};