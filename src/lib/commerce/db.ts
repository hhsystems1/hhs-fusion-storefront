import { supabase } from './client';
import { Product, Category } from './types';

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
};
