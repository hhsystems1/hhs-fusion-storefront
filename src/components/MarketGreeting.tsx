'use client';

import { useEffect, useState } from 'react';

type Market = 'co' | 'tx';

export default function MarketGreeting() {
  const [market, setMarket] = useState<Market | null>(null);

  useEffect(() => {
    fetch('/api/market')
      .then((res) => res.json())
      .then((data) => {
        if (data.market === 'co' || data.market === 'tx') setMarket(data.market);
      })
      .catch(() => {});
  }, []);

  if (!market) return null;

  return (
    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-hhs-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-hhs-slate-600 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-hhs-accent" />
      Welcome, {market === 'tx' ? 'Texas' : 'Colorado'} shopper.
    </p>
  );
}