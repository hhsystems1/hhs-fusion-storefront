import { supabase } from '../supabase/client';
import { Product, Category } from '../supabase/types';

export const commerceDb = {
  products: {
    async getAllActive(categorySlug?: string): Promise<Product[]> {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true);

      if (categorySlug) {
        const categoryId = await this.getCategoryIdBySlug(categorySlug);
        if (!categoryId) return [];
        query = query.eq('category_id', categoryId);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw new Error(`Failed to fetch products: ${error.message}`);
      return data as Product[];
    },

    async getByCategorySlug(slug: string): Promise<Product[]> {
      return this.getAllActive(slug);
    },

    async getBySlug(slug: string): Promise<Product | null> {
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
      const { data, error } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', slug)
        .single();

      if (error || !data) return null;
      return data.id;
    },

    async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
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
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');

      if (error) throw new Error(`Failed to fetch all products: ${error.message}`);
      return data as Product[];
    },
  },

  categories: {
    async getAll(): Promise<Category[]> {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw new Error(`Failed to fetch categories: ${error.message}`);
      return data as Category[];
    },

    async getBySlug(slug: string): Promise<Category | null> {
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
      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, products(*))')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw new Error(`Failed to fetch orders: ${error.message}`);
      return data;
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, products(*))')
        .eq('id', id)
        .single();

      if (error) throw new Error(`Order not found: ${error.message}`);
      return data;
    },

    async getByHash(hash: string) {
      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, products(*))')
        .eq('secure_hash', hash)
        .single();

      if (error) throw new Error(`Invalid order hash: ${error.message}`);
      return data;
    },

    async getBySessionId(sessionId: string) {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('stripe_session_id', sessionId)
        .single();

      if (error) throw new Error(`Order not found for session: ${error.message}`);
      return data;
    },

    async getStats() {
      const { data: revenue, error: revErr } = await supabase
        .from('orders')
        .select('total_amount');
      
      const { data: orders, error: ordErr } = await supabase
        .from('orders')
        .select('id');

      if (revErr || ordErr) throw new Error('Failed to fetch stats');

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
