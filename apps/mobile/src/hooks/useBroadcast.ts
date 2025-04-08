import { useEffect } from 'react';

import { getGroupBroadcastChannel, GroupBroadcastEvent } from '@jshare/common';

import { supabase } from '~/lib/supabase';

export const useGroupBroadcasts = (arsg: { groupId: string; onMessage?: () => void }) => {
    const { groupId, onMessage } = arsg;

    useEffect(() => {
        const channelId = getGroupBroadcastChannel(groupId);
        const channel = supabase.channel(channelId);

        channel.subscribe();
        channel.on('broadcast', { event: GroupBroadcastEvent.Message }, (payload) => {
            onMessage?.();
        });

        return () => {
            channel.unsubscribe();
        };
    }, [onMessage, groupId]);
};
