import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CartProvider } from '@/components/CartController';
import CartNavButton from '@/components/CartNavButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fusion 44X | Helping Hands Systems',
  description: 'Premium engineering and technology solutions by Helping Hands Systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-hhs-slate-50 text-hhs-slate-900 antialiased`}>
        <CartProvider>
          <header className="border-b border-hhs-slate-200 bg-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-hhs-blue tracking-tight">
                  HELPING HANDS <span className="text-hhs-accent">SYSTEMS</span>
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-hhs-slate-900">
                <Link href="/" className="hover:text-hhs-blue transition-colors">Home</Link>
                <Link href="/colorado" className="hover:text-hhs-blue transition-colors">Colorado</Link>
                <Link href="/texas" className="hover:text-hhs-blue transition-colors">Texas</Link>
                <Link href="/products" className="hover:text-hhs-blue transition-colors">Products</Link>
                <CartNavButton />
              </div>
            </nav>
          </header>

          <main className="min-h-screen">
            {children}
          </main>

          <footer className="bg-hhs-blue text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <span className="text-lg font-bold tracking-tight">
                    HELPING HANDS <span className="text-hhs-accent">SYSTEMS</span>
                  </span>
                  <p className="mt-4 text-hhs-slate-50 opacity-80 max-w-md">
                    Delivering premium engineering excellence and high-performance technology solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li><Link href="/products" className="hover:text-hhs-accent transition-colors">Products</Link></li>
                    <li><Link href="/colorado" className="hover:text-hhs-accent transition-colors">Shop Colorado</Link></li>
                    <li><Link href="/texas" className="hover:text-hhs-accent transition-colors">Shop Texas</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li><a href="/privacy" className="hover:text-hhs-accent transition-colors">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-hhs-accent transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-60">
                © {new Date().getFullYear()} Helping Hands Systems. All rights reserved.
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
