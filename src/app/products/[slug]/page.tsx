import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getShowcaseProduct } from '@/lib/commerce/products';
import { VSLSalesPage } from '@/components/VSLSalesPage';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getShowcaseProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Fusion 44X | Helping Hands Systems`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getShowcaseProduct(slug);

  if (!product) {
    notFound();
  }

  return <VSLSalesPage product={product} />;
}