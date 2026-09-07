import Link from 'next/link';
import { ArrowRight, BadgeCheck, ChevronDown, Clock, Home, MapPin, ShieldCheck, ShoppingCart } from 'lucide-react';
import { ShowcaseProduct, formatPrice, runtimeBreakdown } from '@/lib/commerce/products';
import { AddToCartButton } from '@/components/AddToCartButton';

interface VSLSalesPageProps {
  product: ShowcaseProduct;
}

function RuntimeExplainer({ hours }: { hours: number }) {
  const b = runtimeBreakdown(hours);

  const rows = [
    { label: 'Around the clock (24/7)', value: `${b.continuousDays} days`, detail: 'If it never stopped running' },
    { label: '12 hours a day', value: `~${b.at12hMonths} months`, detail: 'A common daily filtration schedule' },
    { label: '8 hours a day', value: `~${b.at8hMonths} months`, detail: 'A typical water-cycling routine' },
    { label: '4 hours a day', value: `~${b.at4hYears} years`, detail: 'Light everyday use' },
  ];

  return (
    <section className="relative px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-hhs-accent/40 bg-hhs-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-hhs-accent">
            <Clock className="h-3.5 w-3.5" /> The {hours.toLocaleString()}-Hour Rule
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-4xl">
            {hours.toLocaleString()} hours is a long time.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-hhs-slate-600">
            Your probe tracks life in hours of runtime, not calendar days. Here&apos;s what {hours.toLocaleString()} hours looks like in real life.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`rounded-2xl border p-5 ${i === 0 ? 'border-hhs-accent/40 bg-gradient-to-br from-hhs-accent/15 to-transparent' : 'border-hhs-slate-200 bg-white'}`}
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-hhs-slate-500">{row.label}</div>
              <div className={`mt-1 text-3xl font-extrabold tracking-tight ${i === 0 ? 'text-hhs-blue' : 'text-hhs-slate-900'}`}>
                {row.value}
              </div>
              <div className="mt-1 text-sm text-hhs-slate-500">{row.detail}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-hhs-slate-500">
          When your runtime passes {hours.toLocaleString()} hours, swap in a fresh refill to keep your Fusion 44X probe reading true.
        </p>
      </div>
    </section>
  );
}

export const VSLSalesPage = ({ product }: VSLSalesPageProps) => {
  const Icon = product.icon;
  const price = product.price ? formatPrice(product.price) : null;

  return (
    <div className="min-h-screen bg-hhs-slate-50 text-hhs-slate-900">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-hhs-blue-dark/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
          <Link href="/" className="text-sm font-extrabold tracking-tight text-white">
            HELPING HANDS <span className="text-hhs-accent">SYSTEMS</span>
          </Link>
          <div className="flex items-center gap-3">
            {price && <span className="text-sm font-bold text-white">{price}</span>}
            <a
              href={product.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-hhs-accent px-4 py-1.5 text-xs font-bold text-hhs-blue-dark shadow-md transition hover:brightness-110"
            >
              Buy Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${product.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(0,0,0,0.3),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-12 text-center text-white sm:pb-20 sm:pt-16">
          <span className="rounded-full border border-white/40 bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur">
            {product.category}
          </span>

          <div className="mt-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/20 shadow-2xl shadow-black/30 backdrop-blur-md sm:h-36 sm:w-36">
            {product.image ? (
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            ) : (
              <Icon className="h-16 w-16 sm:h-20 sm:w-20" strokeWidth={1.5} />
            )}
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">{product.tagline}</p>

          <div className="mt-6 flex items-center gap-4">
            {price && (
              <>
                <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">{price}</span>
                {product.compareAtPrice && (
                  <span className="text-2xl font-semibold text-white/60 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </>
            )}
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <a
              href={product.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-hhs-accent px-8 py-4 text-lg font-extrabold text-hhs-blue-dark shadow-xl shadow-black/20 transition hover:scale-[1.02] hover:brightness-110"
            >
              <ShoppingCart className="h-5 w-5" /> {price ? `Buy ${product.name.split(' ').slice(-2).join(' ')}` : 'Buy Refill'} — {price ?? 'Checkout'}
            </a>
            <AddToCartButton
              product={{ id: product.slug, slug: product.slug, name: product.name, price: product.price, maxQuantity: product.maxQuantity ?? null }}
              label="Add to Cart"
              className="flex-1 rounded-2xl border border-white/40 bg-white/15 px-8 py-4 text-lg font-bold text-white backdrop-blur transition hover:bg-white/25"
            />
          </div>

          <a
            href="#how-it-works"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            Or see why it works <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5">
              <BadgeCheck className="h-4 w-4 text-hhs-accent" /> Secure Stripe checkout
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-hhs-accent" /> Sold by Helping Hands Systems
            </span>
          </div>
        </div>
      </section>

      {/* Built for CO & TX */}
      <section id="how-it-works" className="border-y border-hhs-slate-200 bg-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-hhs-slate-900 sm:text-3xl">
            Built for the homes you actually live in
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-hhs-slate-600">
            The Fusion 44X line is designed around one reality: most Colorado and Texas homeowners don&apos;t have resort-sized lots. These are compact, practical units that fit the space you have.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-hhs-slate-200 bg-hhs-slate-50 p-6 text-center">
              <Home className="mx-auto h-8 w-8 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 font-bold text-hhs-slate-900">Compact footprint</h3>
              <p className="mt-1 text-sm text-hhs-slate-500">Sized for patios, side yards, and smaller backyards.</p>
            </div>
            <div className="rounded-2xl border border-hhs-slate-200 bg-hhs-slate-50 p-6 text-center">
              <MapPin className="mx-auto h-8 w-8 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 font-bold text-hhs-slate-900">Colorado & Texas born</h3>
              <p className="mt-1 text-sm text-hhs-slate-500">Sized for the property layouts common in CO and TX homes.</p>
            </div>
            <div className="rounded-2xl border border-hhs-slate-200 bg-hhs-slate-50 p-6 text-center">
              <ShoppingCart className="mx-auto h-8 w-8 text-hhs-blue" strokeWidth={1.5} />
              <h3 className="mt-3 font-bold text-hhs-slate-900">Homeowner friendly</h3>
              <p className="mt-1 text-sm text-hhs-slate-500">A straightforward buy, without excesses that pad the price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product description / features */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-hhs-slate-600 sm:text-xl">
            {product.description}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-1">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 rounded-2xl border border-hhs-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hhs-blue text-white">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <p className="font-medium text-hhs-slate-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Runtime explainer for the probe refill */}
      {product.runtimeHours && <RuntimeExplainer hours={product.runtimeHours} />}

      {/* FAQ */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-hhs-slate-900">
            Questions, answered
          </h2>
          <div className="space-y-3">
            {product.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-hhs-slate-200 bg-white p-5 transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 font-bold text-hhs-slate-900 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-hhs-blue transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-hhs-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-32 pt-4 sm:pb-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-hhs-slate-200 bg-white p-8 text-center shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-hhs-slate-900">
            {product.name}
          </h2>
          {price && (
            <div className="mt-4">
              <span className="text-5xl font-extrabold tracking-tight text-hhs-blue">{price}</span>
            </div>
          )}
          <p className="mt-4 text-hhs-slate-600">
            Secure checkout through Stripe. No account required.
          </p>
          <p className="mt-1 text-xs text-hhs-slate-400">
            Sales tax, where applicable, is calculated by Stripe at checkout based on your location.
          </p>
          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-hhs-accent px-8 py-5 text-lg font-extrabold text-hhs-blue-dark shadow-xl shadow-hhs-accent/30 transition hover:scale-[1.02] hover:brightness-110"
          >
            <ShoppingCart className="h-6 w-6" /> Checkout Now
          </a>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-medium text-hhs-slate-500 underline-offset-4 hover:text-hhs-blue hover:underline"
          >
            Back to the full collection
          </Link>
        </div>
      </section>

      {/* Sticky mobile checkout bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-hhs-blue-dark/95 px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-white">{product.name}</div>
            {price && <div className="text-xs font-medium text-white/70">{price}</div>}
          </div>
          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-hhs-accent px-6 py-3 text-sm font-extrabold text-hhs-blue-dark shadow-lg transition hover:brightness-110"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};