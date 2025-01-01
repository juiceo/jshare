import { useEffect } from 'react';

import { getGroupBroadcastChannel, GroupBroadcastEvent } from '@jshare/common';

import { supabase } from '~/services/supabase';

export const useGroupBroadcasts = (arsg: { groupId: string; onMessage?: () => void }) => {
    const { groupId, onMessage } = arsg;

    useEffect(() => {
        const channelId = getGroupBroadcastChannel(groupId);
        const channel = supabase.channel(channelId, {
            config: {
                broadcast: {
                    self: true,
                },
            },
        });

        channel.subscribe();
        channel.on('broadcast', { event: GroupBroadcastEvent.Message }, (payload) => {
            onMessage?.();
        });

        return () => {
            channel.unsubscribe();
        };
    }, [onMessage, groupId]);
};
