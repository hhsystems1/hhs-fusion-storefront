import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Market } from '@/lib/commerce/markets';
import { showcaseProducts } from '@/lib/commerce/products';
import { ProductShowcaseCard } from '@/components/ProductShowcaseCard';

interface MarketLandingProps {
  market: Market;
}

export const MarketLanding = ({ market }: MarketLandingProps) => {
  return (
    <div className="bg-white text-hhs-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hhs-slate-50 to-white">
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${market.accent}`} />
        <div className={`mx-auto max-w-6xl px-4 pb-16 pt-16 sm:pb-24 sm:pt-24`}>
          <div className="max-w-3xl">
            <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-hhs-slate-600 ${market.accentSoft}`}>
              {market.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-hhs-slate-900 sm:text-6xl">
              {market.heroTitle}{' '}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${market.accent}`}>
                {market.heroHighlight}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-hhs-slate-600">
              {market.heroSub}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <a
                href="#line"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-hhs-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-hhs-blue/20 transition hover:bg-hhs-blue-dark"
              >
                {market.heroCta} <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/products"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-hhs-slate-200 bg-white px-8 py-4 text-base font-bold text-hhs-slate-800 transition hover:border-hhs-blue hover:text-hhs-blue"
              >
                View all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="border-y border-hhs-slate-100 bg-white px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">
          {market.points.map((point) => (
            <div key={point.title} className="rounded-2xl border border-hhs-slate-100 bg-hhs-slate-50/60 p-6">
              <BadgeCheck className="h-7 w-7 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 text-lg font-bold text-hhs-slate-900">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-hhs-slate-600">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The line */}
      <section id="line" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-hhs-blue">The Fusion 44X line</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-4xl">
              Sized for {market.name}.
            </h2>
            <p className="mt-3 text-hhs-slate-600">
              {market.difference}
            </p>
            <Link
              href="/?noredirect=1"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-hhs-slate-500 underline-offset-4 hover:text-hhs-blue hover:underline"
            >
              Not in {market.name}? View all markets <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProducts.map((product) => (
              <ProductShowcaseCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-hhs-blue px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {market.name} homeowners, your backyard is ready.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Browse the line above and check out securely through Stripe in minutes.
          </p>
          <a
            href="#line"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-hhs-accent px-8 py-4 text-base font-extrabold text-hhs-blue-dark shadow-lg shadow-black/20 transition hover:brightness-110"
          >
            {market.heroCta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};