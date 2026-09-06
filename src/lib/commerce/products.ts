import { Bath, Droplets, Waves, Syringe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Faq {
  q: string;
  a: string;
}

export interface ShowcaseProduct {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  price: number | null;
  compareAtPrice: number | null;
  paymentLink: string;
  icon: LucideIcon;
  gradient: string;
  image?: string | null;
  glow: string;
  features: string[];
  faqs: Faq[];
  runtimeHours?: number;
  maxQuantity?: number | null;
}

const PAYMENT_SPA = 'https://buy.stripe.com/cNicN74vT74p6fv0zNeME07';
const PAYMENT_SMALL_POOL = 'https://buy.stripe.com/fZudRb2nL3Sd1Zf6YbeME06';
const PAYMENT_LARGE_POOL = 'https://buy.stripe.com/6oU7sNbYl1K547n5U7eME05';
const PAYMENT_PROBE_REFILL = 'https://buy.stripe.com/7sYdRb9QdfAV47n82feME04';

export const showcaseProducts: ShowcaseProduct[] = [
  {
    slug: 'cascade-spa',
    name: 'Fusion 44X Cascade Spa',
    category: 'Spa / Jacuzzi',
    tagline: 'A real spa experience, sized for the spaces where you actually live.',
    description:
      'A compact jacuzzi built for the smaller backyards, patios, and side yards common across Colorado and Texas. Full soak, smaller footprint.',
    price: 2890,
    compareAtPrice: null,
    paymentLink: PAYMENT_SPA,
    maxQuantity: 1,
    icon: Bath,
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    glow: 'shadow-sky-500/40',
    features: [
      'Compact footprint that fits patios and smaller backyards',
      'A true soak without a resort-sized footprint',
      'Concept designed for Colorado and Texas home layouts',
    ],
    faqs: [
      {
        q: 'Is this the right size for me?',
        a: 'If your backyard or patio is on the smaller side, this is the class of unit built for you. Compact spa and jacuzzi units are the standard for homeowners in Colorado and Texas, where space comes at a premium.',
      },
      {
        q: 'Why is the Fusion 44X line different?',
        a: 'Fusion 44X is our homeowner-focused water collection. Every unit in the line is built around the reality of smaller, practical home spaces rather than resort-style acreage.',
      },
      {
        q: 'How does buying work?',
        a: 'Your purchase goes through our secure Stripe checkout. No account needed, card payments processed by Stripe.',
      },
    ],
  },
  {
    slug: 'oasis-plunge-pool',
    name: 'Fusion 44X Oasis Pool',
    category: 'Small Pool',
    tagline: 'All the refresh of a pool in a cool, compact form.',
    description:
      'A smaller pool built for the compact yards and warm-climate days of Texas and Colorado. Jump in, cool down, keep the space.',
    price: 4990,
    compareAtPrice: null,
    paymentLink: PAYMENT_SMALL_POOL,
    maxQuantity: 1,
    icon: Droplets,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    glow: 'shadow-teal-500/40',
    features: [
      'Smaller footprint than a traditional pool',
      'Made for practical, warm-climate backyards',
      'Part of the homeowner-focused Fusion 44X line',
    ],
    faqs: [
      {
        q: 'How is this different from a big pool?',
        a: 'It is a smaller, more practical footprint. That makes it a better fit for typical Colorado and Texas home lots, where traditional full-size pools simply do not fit (or fit poorly).',
      },
      {
        q: 'Who is this pool for?',
        a: 'Homeowners who want the refresh of a pool but do not have the acreage for a full-size install.',
      },
      {
        q: 'How does buying work?',
        a: 'Your purchase goes through our secure Stripe checkout. No account needed, card payments processed by Stripe.',
      },
    ],
  },
  {
    slug: 'horizon-pool',
    name: 'Fusion 44X Horizon Pool',
    category: 'Large Pool',
    tagline: 'Room to float, without the acreage.',
    description:
      'The largest unit in the Fusion 44X line, still practical for the real backyards of Colorado and Texas. More water, more room, less footprint than traditional pools.',
    price: 6890,
    compareAtPrice: null,
    paymentLink: PAYMENT_LARGE_POOL,
    maxQuantity: 1,
    icon: Waves,
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    glow: 'shadow-indigo-500/40',
    features: [
      'The largest size in the Fusion 44X homeowner line',
      'Built to fit the practical lots common in CO and TX',
      'More room to move while keeping a workable footprint',
    ],
    faqs: [
      {
        q: 'How big is "large"?',
        a: 'Large within the Fusion 44X line, which is deliberately sized for homeowners with smaller, practical properties. It is the biggest option here without being a traditional full-size pool.',
      },
      {
        q: 'Pool vs. spa — which should I pick?',
        a: 'If you want a deep soak with more water and space to float, go with the Horizon Pool. For an intimate soak in a very tight footprint, the Cascade Spa is the one.',
      },
      {
        q: 'How does buying work?',
        a: 'Your purchase goes through our secure Stripe checkout. No account needed, card payments processed by Stripe.',
      },
    ],
  },
  {
    slug: 'probe-refill',
    name: 'Fusion 44X Probe Refill',
    category: 'Maintenance / Probe',
    tagline: 'Replace your Fusion 44X probe refill when the hours run out.',
    description:
      'The replacement refill for the Fusion 44X water probe. Your unit tracks life in hours of runtime, not calendar days. This refill is due after 2,000 hours.',
    price: null,
    compareAtPrice: null,
    paymentLink: PAYMENT_PROBE_REFILL,
    maxQuantity: null,
    icon: Syringe,
    gradient: 'from-amber-500 via-orange-500 to-rose-600',
    glow: 'shadow-orange-500/40',
    runtimeHours: 2000,
    features: [
      'Replacement refill for the Fusion 44X probe',
      'Due at 2,000 hours of runtime, not by calendar date',
      'Simple swap when the time comes',
    ],
    faqs: [
      {
        q: 'When do I need this refill?',
        a: 'After your probe has logged 2,000 hours of runtime. Your unit tracks this for you in hours of operation, so the replacement schedule follows real usage, not the calendar.',
      },
      {
        q: 'What does 2,000 hours actually look like?',
        a: 'Real talk: 2,000 hours is about 83 days running around the clock. At a typical 12 hours a day, that is roughly 5 to 6 months. At 8 hours a day, about 8 months. On lighter schedules, over a year.',
      },
      {
        q: 'How does buying work?',
        a: 'Your purchase goes through our secure Stripe checkout. No account needed, card payments processed by Stripe.',
      },
    ],
  },
];

export interface RuntimeBreakdown {
  continuousDays: number;
  at12hDays: number;
  at12hMonths: number;
  at8hDays: number;
  at8hMonths: number;
  at4hDays: number;
  at4hYears: number;
}

export function runtimeBreakdown(hours: number): RuntimeBreakdown {
  const continuousDays = roundDiv(hours, 24);
  return {
    continuousDays,
    at12hDays: roundDiv(hours, 12),
    at12hMonths: roundDiv(hours / 12 / 30.44, 1),
    at8hDays: roundDiv(hours, 8),
    at8hMonths: roundDiv(hours / 8 / 30.44, 1),
    at4hDays: roundDiv(hours, 4),
    at4hYears: roundDiv(hours / 4 / 365, 1),
  };
}

function roundDiv(hours: number, perDay: number): number {
  return Math.round((hours / perDay) * 10) / 10;
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US')}`;
}

export function getShowcaseProduct(slug: string): ShowcaseProduct | null {
  return showcaseProducts.find((p) => p.slug === slug) ?? null;
}