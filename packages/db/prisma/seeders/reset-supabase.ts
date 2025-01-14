import { createClient } from '@supabase/supabase-js';

import { getEnv } from '@jshare/common';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', { required: true });

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

export const resetSupabase = async (): Promise<void> => {
    /**
     * Delete all current users from supabase
     */
    const currentUsers = await supabase.auth.admin.listUsers();
    console.log(`Deleting ${currentUsers.data.users.length} users`);
    await Promise.all(
        currentUsers.data.users.map((user) => supabase.auth.admin.deleteUser(user.id))
    );
    /**
     * Delete all current storage files from supabase
     */
    const files = await supabase.storage.from('uploads').list();
    console.log(`Deleting ${files.data?.length ?? 0} files`);
    await supabase.storage.from('uploads').remove(files.data?.map((file) => file.name) ?? []);
};
