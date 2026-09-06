import Link from 'next/link';
import { ArrowRight, Mountain, Sun, ShoppingCart, BadgeCheck } from 'lucide-react';
import { showcaseProducts } from '@/lib/commerce/products';
import { ProductShowcaseCard } from '@/components/ProductShowcaseCard';

export default function Home() {
  return (
    <div className="bg-white text-hhs-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hhs-slate-100 bg-gradient-to-b from-hhs-slate-50 to-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-hhs-blue via-hhs-blue-light to-hhs-accent" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-hhs-blue/5 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:pb-24 sm:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-hhs-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-hhs-blue">
              <BadgeCheck className="h-4 w-4" /> The Fusion 44X Collection
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-hhs-slate-900 sm:text-6xl">
              Premium water living,{" "}
              <span className="bg-gradient-to-r from-hhs-blue to-hhs-blue-light bg-clip-text text-transparent">
                sized for real backyards.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-hhs-slate-600">
              Compact spas and pools built for the homes of Colorado and Texas. Full experience,
              smaller footprint, secure Stripe checkout in minutes.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <Link
                href="#collection"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-hhs-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-hhs-blue/20 transition hover:bg-hhs-blue-dark"
              >
                Explore the line <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#markets"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-hhs-slate-200 bg-white px-8 py-4 text-base font-bold text-hhs-slate-800 transition hover:border-hhs-blue hover:text-hhs-blue"
              >
                Shop by state
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-hhs-blue">Shop by state</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-4xl">
              Choose your market
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-hhs-slate-600">
              We build for the spaces where Colorado and Texas homeowners actually live. Pick your state for a tailored lineup.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/colorado"
              className="group relative overflow-hidden rounded-3xl border border-hhs-slate-200 bg-gradient-to-br from-sky-600 to-blue-800 p-8 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Mountain className="absolute -bottom-6 -right-6 h-40 w-40 text-white/10 transition-transform group-hover:scale-110" strokeWidth={1} />
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
                <Mountain className="h-3.5 w-3.5" /> Colorado
              </span>
              <h3 className="mt-6 text-3xl font-extrabold tracking-tight">Compact water for mountain-state lots.</h3>
              <p className="mt-2 max-w-sm text-white/80">Sized for the patios, side yards, and smaller footprints common across Colorado.</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur transition group-hover:bg-white/25">
                Shop Colorado <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/texas"
              className="group relative overflow-hidden rounded-3xl border border-hhs-slate-200 bg-gradient-to-br from-amber-500 to-orange-700 p-8 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sun className="absolute -bottom-6 -right-6 h-40 w-40 text-white/10 transition-transform group-hover:scale-110" strokeWidth={1} />
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
                <Sun className="h-3.5 w-3.5" /> Texas
              </span>
              <h3 className="mt-6 text-3xl font-extrabold tracking-tight">Beat the heat. Keep your backyard.</h3>
              <p className="mt-2 max-w-sm text-white/80">Pools and spas sized for the real lots and long, warm seasons of Texas.</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur transition group-hover:bg-white/25">
                Shop Texas <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="border-t border-hhs-slate-100 bg-hhs-slate-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-hhs-blue">The lineup</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-4xl">
                Four products. One purpose.
              </h2>
              <p className="mt-3 max-w-xl text-hhs-slate-600">
                Premium water living for homeowners with real-world space. Pick your size, check out in seconds.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-hhs-slate-200 bg-white px-5 py-3 text-sm font-bold text-hhs-slate-800 transition hover:border-hhs-blue hover:text-hhs-blue"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProducts.map((product) => (
              <ProductShowcaseCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why band */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-hhs-blue">Why homeowners choose us</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-4xl">
              Built for the homes you actually live in
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-hhs-slate-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-hhs-blue/5 text-hhs-blue">
                <BadgeCheck className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-bold text-hhs-slate-900">Compact footprint</h3>
              <p className="mt-1.5 text-sm text-hhs-slate-600">
                Sized for patios, side yards, and smaller backyards.
              </p>
            </div>
            <div className="rounded-2xl border border-hhs-slate-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-hhs-blue/5 text-hhs-blue">
                <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-bold text-hhs-slate-900">Secure Stripe checkout</h3>
              <p className="mt-1.5 text-sm text-hhs-slate-600">
                Buy directly through Stripe. No account required.
              </p>
            </div>
            <div className="rounded-2xl border border-hhs-slate-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-hhs-blue/5 text-hhs-blue">
                <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-bold text-hhs-slate-900">Colorado & Texas market</h3>
              <p className="mt-1.5 text-sm text-hhs-slate-600">
                Designed around the property layouts common in CO and TX.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}