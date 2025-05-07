import { broadcastRealtimeUpdate } from '@jshare/common';
import { DB } from '@jshare/db';

import { db } from '../services/db';
import { supabase } from '../services/supabase';

export const onMessageCreated = async (message: DB.Message<{ attachments: true }>) => {
    const groupParticipants = await db.groupParticipant.findMany({
        where: {
            groupId: message.groupId,
        },
    });

    for (const subscriber of groupParticipants) {
        broadcastRealtimeUpdate(supabase, subscriber.userId, {
            model: 'Message',
            data: message,
        });
    }

    await db.group.update({
        where: {
            id: message.groupId,
        },
        data: {
            lastActivity: new Date(),
        },
    });
};
