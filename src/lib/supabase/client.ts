import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from '../validation/env';

const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY } = env;

export const supabase: SupabaseClient | null =
  NEXT_PUBLIC_SUPABASE_URL && NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
    : null;

export const supabaseAdmin: SupabaseClient | null =
  NEXT_PUBLIC_SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      })
    : null;