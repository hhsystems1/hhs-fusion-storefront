import { supabase } from '../supabase/client';
import { Product, Category } from '../supabase/types';

const EMPTY_PRODUCT_ARRAY: Product[] = [];
const EMPTY_CATEGORY_ARRAY: Category[] = [];

export const commerceDb = {
  products: {
    async getAllActive(categorySlug?: string): Promise<Product[]> {
      if (!supabase) return EMPTY_PRODUCT_ARRAY;

      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true);

      if (categorySlug) {
        const categoryId = await this.getCategoryIdBySlug(categorySlug);
        if (!categoryId) return EMPTY_PRODUCT_ARRAY;
        query = query.eq('category_id', categoryId);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Failed to fetch products:', error.message);
        return EMPTY_PRODUCT_ARRAY;
      }
      return (data as Product[]) || EMPTY_PRODUCT_ARRAY;
    },

    async getByCategorySlug(slug: string): Promise<Product[]> {
      return this.getAllActive(slug);
    },

    async getBySlug(slug: string): Promise<Product | null> {
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) return null;
      return data as Product;
    },

    async getCategoryIdBySlug(slug: string): Promise<string | null> {
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', slug)
        .single();

      if (error || !data) return null;
      return data.id;
    },

    async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
      if (!supabase) throw new Error('Database not configured');

      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw new Error(`Failed to update product: ${error.message}`);
      return data as Product;
    },

    async getAllProducts(): Promise<Product[]> {
      if (!supabase) return EMPTY_PRODUCT_ARRAY;

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');

      if (error) {
        console.error('Failed to fetch all products:', error.message);
        return EMPTY_PRODUCT_ARRAY;
      }
      return (data as Product[]) || EMPTY_PRODUCT_ARRAY;
    },
  },

  categories: {
    async getAll(): Promise<Category[]> {
      if (!supabase) return EMPTY_CATEGORY_ARRAY;

      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Failed to fetch categories:', error.message);
        return EMPTY_CATEGORY_ARRAY;
      }
      return (data as Category[]) || EMPTY_CATEGORY_ARRAY;
    },

    async getBySlug(slug: string): Promise<Category | null> {
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) return null;
      return data as Category;
    },
  },

  orders: {
    async getRecent(limit = 10) {
      if (!supabase) return [];

      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, products(*))')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Failed to fetch orders:', error.message);
        return [];
      }
      return data || [];
    },

    async getById(id: string) {
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, products(*))')
        .eq('id', id)
        .single();

      if (error) return null;
      return data;
    },

    async getByHash(hash: string) {
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, products(*))')
        .eq('secure_hash', hash)
        .single();

      if (error) return null;
      return data;
    },

    async getBySessionId(sessionId: string) {
      if (!supabase) return null;

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('stripe_session_id', sessionId)
        .single();

      if (error) return null;
      return data;
    },

    async getStats() {
      if (!supabase) return { totalRevenue: 0, totalOrders: 0, avgOrderValue: 0 };

      const { data: revenue, error: revErr } = await supabase
        .from('orders')
        .select('total_amount');
      
      const { data: orders, error: ordErr } = await supabase
        .from('orders')
        .select('id');

      if (revErr || ordErr) return { totalRevenue: 0, totalOrders: 0, avgOrderValue: 0 };

      const totalRevenue = revenue?.reduce((acc, curr) => acc + Number(curr.total_amount), 0) || 0;
      const totalOrders = orders?.length || 0;

      return {
        totalRevenue,
        totalOrders,
        avgOrderValue: totalOrders > 0 ? totalRevenue / totalOrders : 0,
      };
    },
  },
};