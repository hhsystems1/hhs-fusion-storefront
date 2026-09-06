import type { Metadata } from 'next';
import { getMarket } from '@/lib/commerce/markets';
import { MarketLanding } from '@/components/MarketLanding';

export const metadata: Metadata = {
  title: 'Texas | Fusion 44X | Helping Hands Systems',
  description:
    'Beat the Texas heat with compact pools and spas built for real backyard lots.',
};

export default async function TexasPage() {
  const market = getMarket('texas');
  if (!market) return null;
  return <MarketLanding market={market} />;
}