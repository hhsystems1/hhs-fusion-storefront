import { NextResponse, type NextRequest } from 'next/server';

const MARKET_BY_REGION: Record<string, string> = {
  CO: '/colorado',
  TX: '/texas',
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname !== '/') return NextResponse.next();
  if (url.searchParams.has('noredirect')) return NextResponse.next();

  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase();
  const region = request.headers.get('x-vercel-ip-country-region')?.toUpperCase();

  if (country !== 'US' || !region) return NextResponse.next();

  const target = MARKET_BY_REGION[region];
  if (!target) return NextResponse.next();

  const redirectUrl = new URL(target, request.url);
  return NextResponse.redirect(redirectUrl, 307);
}

export const config = {
  matcher: ['/'],
};