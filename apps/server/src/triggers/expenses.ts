import { supabase } from '../services/supabase';

/**
 * On expense created, send a system message to the group channel
 */

console.log('SETTING UP TRIGGERS');

supabase
    .channel('schema-db-changes')
    .on(
        'postgres_changes',
        {
            event: 'INSERT',
            schema: 'public',
            table: 'expenses',
        },
        (payload) => {
            console.log('EXPENSE CREATED', payload);
        }
    )
    .subscribe();
