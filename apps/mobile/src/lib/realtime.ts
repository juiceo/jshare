import { useEffect } from 'react';

import { onRealtimeUpdate } from '@jshare/common';

import { Store } from '~/lib/store/collections';
import { supabase } from '~/lib/supabase';

export const subscribeToRealtimeUpdates = (userId: string) => {
    return onRealtimeUpdate(supabase, userId, (payload) => {
        switch (payload.model) {
            case 'Message': {
                Store.messages.registerItem(payload.data);
                break;
            }
            case 'Group': {
                Store.groups.registerItem(payload.data);
                break;
            }
            case 'Expense': {
                Store.expenses.registerItem(payload.data);
                break;
            }
            case 'Payment': {
                Store.payments.registerItem(payload.data);
                break;
            }
        }
    });
};

export const useRealtimeUpdates = (userId?: string | null) => {
    useEffect(() => {
        if (!userId) return;

        const listener = subscribeToRealtimeUpdates(userId);

        return () => {
            listener.unsubscribe();
        };
    }, [userId]);
};
