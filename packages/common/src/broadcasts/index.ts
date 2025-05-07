import type { SupabaseClient } from '@supabase/supabase-js';
import SuperJSON from 'superjson';

import type { DB } from '@jshare/db';

export enum BroadcastEvent {
    RealtimeUpdate = 'realtime_update',
}

export type RealtimeUpdatePayload =
    | {
          model: 'Message';
          data: DB.Message<{ attachments: true }>;
      }
    | {
          model: 'Group';
          data: DB.Group<{ coverImage: true; participants: true }>;
      }
    | {
          model: 'Expense';
          data: DB.Expense<{ shares: true }>;
      }
    | {
          model: 'Payment';
          data: DB.Payment;
      };

export type GroupMessagePayload = {
    groupId: string;
    message: DB.Message;
};

export const getUserBroadcastChannel = (userId: string) => {
    return `user_${userId}`;
};

export const broadcastRealtimeUpdate = (
    client: SupabaseClient,
    userId: string,
    payload: RealtimeUpdatePayload
) => {
    const channel = client.channel(getUserBroadcastChannel(userId));

    channel.subscribe((status, err) => {
        if (status !== 'SUBSCRIBED') return null;
        channel
            .send({
                type: 'broadcast',
                event: BroadcastEvent.RealtimeUpdate,
                payload: SuperJSON.stringify(payload),
            })
            .catch((err) => {
                console.log('ERR SENDING REALTIME BROADCAST', err);
            })
            .finally(() => {
                channel.unsubscribe();
            });
    });
};

export const onRealtimeUpdate = (
    client: SupabaseClient,
    userId: string,
    callback: (payload: RealtimeUpdatePayload) => void
) => {
    const channel = getUserBroadcastChannel(userId);
    return client
        .channel(channel)
        .on('broadcast', { event: BroadcastEvent.RealtimeUpdate }, (data) => {
            const parsedPayload = SuperJSON.parse<RealtimeUpdatePayload>(data.payload);
            if (parsedPayload) {
                callback(parsedPayload);
            }
        })
        .subscribe();
};
