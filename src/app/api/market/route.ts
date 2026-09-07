import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country')?.toUpperCase();
  const region = headersList.get('x-vercel-ip-country-region')?.toUpperCase();

  let market: 'co' | 'tx' | null = null;
  if (country === 'US') {
    if (region === 'CO') market = 'co';
    else if (region === 'TX') market = 'tx';
  }

  return NextResponse.json({ market });
}