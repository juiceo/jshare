import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const SUPABASE_API_URL = process.env.SUPABASE_API_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_API_URL) {
    throw new Error("[@jshare/supabase] Missing required environment variable: SUPABASE_API_URL")
}

if (!SUPABASE_ANON_KEY) {
    throw new Error("[@jshare/supabase] Missing required environment variable: SUPABASE_ANON_KEY")
}

export const supabase = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY)