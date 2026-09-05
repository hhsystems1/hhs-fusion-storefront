-- Create categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  sku TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  short_description TEXT,
  price DECIMAL(12, 2) NOT NULL,
  compare_at_price DECIMAL(12, 2),
  image_url TEXT,
  gallery_urls TEXT[],
  weight_oz DECIMAL(8, 2),
  dimensions JSONB, -- { length, width, height }
  is_active BOOLEAN DEFAULT true,
  stock_quantity INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (Shopfront)
CREATE POLICY "Categories are viewable by everyone" 
ON categories FOR SELECT USING (true);

CREATE POLICY "Active products are viewable by everyone" 
ON products FOR SELECT USING (is_active = true);

-- Indexing for performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_categories_slug ON categories(slug);

-- Create orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id TEXT NOT NULL UNIQUE,
  visitor_id TEXT,
  total_amount DECIMAL(12, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'usd',
  status TEXT NOT NULL DEFAULT 'pending',
  secure_hash TEXT UNIQUE,
  payment_intent_id TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create fulfillment_logs table
CREATE TABLE fulfillment_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  request_payload JSONB NOT NULL,
  response_payload JSONB,
  status TEXT NOT NULL, -- 'pending', 'success', 'failed'
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(order_id) -- Ensures one fulfillment record per order for strict idempotency
);

-- Create order_items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(12, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS for orders
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies for orders
CREATE POLICY \"Orders are viewable by admin\" ON orders FOR ALL USING (false); 
CREATE POLICY \"Order items are viewable by admin\" ON order_items FOR ALL USING (false);

CREATE INDEX idx_orders_stripe_session_id ON orders(stripe_session_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

