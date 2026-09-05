export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  category_id: string | null;
  sku: string;
  name: string;
  slug: string;
  description: string;
  short_description?: string;
  price: number;
  compare_at_price?: number;
  image_url: string;
  gallery_urls: string[];
  weight_oz: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  is_active: boolean;
  stock_quantity: number;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
};
