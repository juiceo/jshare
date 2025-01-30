import { getGroupBroadcastChannel, GroupBroadcastEvent } from '@jshare/common';
import { DB } from '@jshare/db';

import { db } from '../services/db';
import { supabase } from '../services/supabase';

export const onMessageCreated = async (message: DB.Message) => {
    supabase.channel(getGroupBroadcastChannel(message.groupId)).send({
        type: 'broadcast',
        event: GroupBroadcastEvent.Message,
        payload: {
            type: GroupBroadcastEvent.Message,
        },
    });

    await db.group.update({
        where: {
            id: message.groupId,
        },
        data: {
            lastActivity: new Date(),
        },
    });
};
