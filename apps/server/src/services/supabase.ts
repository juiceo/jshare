import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';

import { getEnv } from '@jshare/env';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY', { required: true });

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
