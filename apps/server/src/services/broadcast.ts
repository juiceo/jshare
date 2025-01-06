import { getGroupBroadcastChannel, GroupBroadcastEvent } from '@jshare/common';

import { supabase } from './supabase';

export const broadcastNewMessage = (groupId: string) => {
    supabase.channel(getGroupBroadcastChannel(groupId)).send({
        type: 'broadcast',
        event: GroupBroadcastEvent.Message,
        payload: {
            type: GroupBroadcastEvent.Message,
        },
    });
};
