import type { DB } from '@jshare/db';

import { supabase } from '../services/supabase';
import { onExpenseCreated } from './onExpenseCreated';
import { onExpenseUpdated } from './onExpenseUpdated';
import { onGroupCreated } from './onGroupCreated';
import { onMessageCreated } from './onMessageCreated';
import { onPaymentCreated } from './onPaymentCreated';

export const initTriggers = () => {
    supabase
        .channel('database_triggers')
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'expenses',
            },
            (payload) => {
                return onExpenseCreated(payload.new as DB.Expense);
            }
        )
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'expenses',
            },
            (payload) => {
                return onExpenseUpdated(payload.new as DB.Expense);
            }
        )
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'payments',
            },
            (payload) => {
                return onPaymentCreated(payload.new as DB.Payment);
            }
        )
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'messages',
            },
            (payload) => {
                return onMessageCreated(payload.new as DB.Message);
            }
        )
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'groups',
            },
            (payload) => {
                return onGroupCreated(payload.new as DB.Group);
            }
        )
        .subscribe();
};
