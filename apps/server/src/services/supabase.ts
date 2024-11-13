import { createClient } from '@supabase/supabase-js';

import { getEnv } from '@jshare/env';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', { required: true });

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});
