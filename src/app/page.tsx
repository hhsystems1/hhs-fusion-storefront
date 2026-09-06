import { ArrowRight, Home as HomeIcon, MapPin, ShoppingCart, Sparkles } from 'lucide-react';
import { showcaseProducts } from '@/lib/commerce/products';
import { ProductGlassCard } from '@/components/ProductGlassCard';

export default function Home() {
  return (
    <div className="bg-hhs-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hhs-blue-dark via-hhs-blue to-hhs-blue-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,166,35,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center text-white sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
            <Sparkles className="h-4 w-4 text-hhs-accent" /> The Fusion 44X Collection
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Premium water experiences,{" "}
            <span className="text-hhs-accent">sized for real backyards.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Spa, plunge pool, and maintenance built for the compact spaces where Colorado and
            Texas homeowners actually live. Full experience, smaller footprint.
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <a
              href="#collection"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-hhs-accent px-8 py-4 text-lg font-extrabold text-hhs-blue-dark shadow-xl shadow-black/20 transition hover:scale-[1.02] hover:brightness-110"
            >
              Explore the Line <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#why"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur transition hover:bg-white/20"
            >
              Why homeowners choose it
            </a>
          </div>
        </div>
      </section>

      {/* Why band */}
      <section id="why" className="border-y border-hhs-slate-200 bg-white px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-3xl">
            Made for the homes you actually live in
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-hhs-slate-600">
            Most Colorado and Texas homeowners don&apos;t have resort-sized lots. The Fusion 44X
            line delivers the experience in compact, practical sizes that fit.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-hhs-slate-200 bg-hhs-slate-50 p-6 text-center">
              <HomeIcon className="mx-auto h-8 w-8 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 font-bold text-hhs-slate-900">Compact footprint</h3>
              <p className="mt-1 text-sm text-hhs-slate-500">
                Sized for patios, side yards, and smaller backyards.
              </p>
            </div>
            <div className="rounded-2xl border border-hhs-slate-200 bg-hhs-slate-50 p-6 text-center">
              <MapPin className="mx-auto h-8 w-8 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 font-bold text-hhs-slate-900">Colorado & Texas sized</h3>
              <p className="mt-1 text-sm text-hhs-slate-500">
                Built for the property layouts common across CO and TX homes.
              </p>
            </div>
            <div className="rounded-2xl border border-hhs-slate-200 bg-hhs-slate-50 p-6 text-center">
              <ShoppingCart className="mx-auto h-8 w-8 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 font-bold text-hhs-slate-900">Simple, secure checkout</h3>
              <p className="mt-1 text-sm text-hhs-slate-500">
                Buy directly through Stripe. No account required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection - glass cards on dark band */}
      <section id="collection" className="relative overflow-hidden bg-hhs-blue-dark px-4 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(51,102,153,0.45),transparent_60%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              The <span className="text-hhs-accent">Fusion 44X</span> Line
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Four products. One purpose: premium water living for homes with real-world space.
              Pick your size, check out in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProducts.map((product) => (
              <ProductGlassCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}