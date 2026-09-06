export interface MarketPoint {
  title: string;
  body: string;
}

export interface Market {
  slug: string;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  heroCta: string;
  points: MarketPoint[];
  differenceTitle: string;
  difference: string;
  accent: string;
  accentSoft: string;
}

export const markets: Market[] = [
  {
    slug: 'colorado',
    name: 'Colorado',
    eyebrow: 'Colorado market',
    heroTitle: 'Backyard water, sized for',
    heroHighlight: 'Colorado space.',
    heroSub:
      'Mountain towns and valley lots rarely leave room for resort-scale pools. The Fusion 44X line is built for the compact footprint you actually have.',
    heroCta: 'Shop the Colorado line',
    points: [
      {
        title: 'Smaller-lot friendly',
        body: 'Compact footprints that fit the yards, patios, and side lots common across Colorado.',
      },
      {
        title: 'Cool-evening ready',
        body: 'A spa soak that turns a crisp evening into the best moment of the day.',
      },
      {
        title: 'Simple, secure buying',
        body: 'Purchase straight through Stripe checkout. No account, no runaround.',
      },
    ],
    differenceTitle: 'The Colorado difference',
    difference:
      'From metro lots to foothill and mountain-town properties, Colorado homes reward efficient use of space. Smaller units are the norm here — and that is exactly what the Fusion 44X line is built around.',
    accent: 'from-sky-600 to-blue-700',
    accentSoft: 'bg-sky-50',
  },
  {
    slug: 'texas',
    name: 'Texas',
    eyebrow: 'Texas market',
    heroTitle: 'Beat the Texas heat.',
    heroHighlight: 'Keep your backyard.',
    heroSub:
      'Texas backyards and patios are made for living in. The Fusion 44X line delivers pools and spas sized for real lots — big refresh, compact footprint.',
    heroCta: 'Shop the Texas line',
    points: [
      {
        title: 'Heat-season ready',
        body: 'Cool-down pools and soaking spas built for long, warm Texas seasons.',
      },
      {
        title: 'Backyard-sized',
        body: 'Fits the patios, side yards, and compact lots typical across Texas.',
      },
      {
        title: 'Simple, secure buying',
        body: 'Purchase straight through Stripe checkout. No account, no runaround.',
      },
    ],
    differenceTitle: 'The Texas difference',
    difference:
      'Texas living is outdoor living, but full-size pools simply do not fit many suburban and city lots. Compact water units are the practical standard here — sized for the space you own, ready for the heat.',
    accent: 'from-amber-500 to-orange-600',
    accentSoft: 'bg-amber-50',
  },
];

export function getMarket(slug: string): Market | null {
  return markets.find((m) => m.slug === slug) ?? null;
}