import type { Metadata } from 'next';
import { getMarket } from '@/lib/commerce/markets';
import { MarketLanding } from '@/components/MarketLanding';

export const metadata: Metadata = {
  title: 'Colorado | Fusion 44X | Helping Hands Systems',
  description:
    'Compact spas and pools built for Colorado backyards. Sized for the space you actually have.',
};

export default async function ColoradoPage() {
  const market = getMarket('colorado');
  if (!market) return null;
  return <MarketLanding market={market} />;
}