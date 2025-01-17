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

async function testServiceRoleKey() {
    console.log('Testing Supabase service role key...');
    const { error } = await supabase.from('expenses').select('*');

    if (error !== null) {
        console.error('Supabase service role error: unauthorized!');
    } else {
        console.log('Supabase service role works :)');
    }
}

testServiceRoleKey();
