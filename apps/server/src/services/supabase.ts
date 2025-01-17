import { createClient } from '@supabase/supabase-js';

import { getEnv } from '@jshare/common';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', { required: true });

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
    },
});

const testSupabaseClient = async () => {
    const { error } = await supabase.from('expenses').select('*').limit(1);

    if (error !== null) {
        throw new Error(
            `Supabase client was unable to read the database, please check your supabase URL and service role key: ${error.message}`
        );
    }
};

testSupabaseClient();
