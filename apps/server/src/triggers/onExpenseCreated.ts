import { v4 as uuidv4 } from 'uuid';

import { broadcastRealtimeUpdate } from '@jshare/common';
import { DB } from '@jshare/db';

import { db } from '../services/db';
import { supabase } from '../services/supabase';

export const onExpenseCreated = async (expense: DB.Expense<{ shares: true }>) => {
    const groupParticipants = await db.groupParticipant.findMany({
        where: {
            groupId: expense.groupId,
        },
    });

    for (const subscriber of groupParticipants) {
        broadcastRealtimeUpdate(supabase, subscriber.userId, {
            model: 'Expense',
            data: expense,
        });
    }

    await db.message.create({
        data: {
            authorId: expense.ownerId,
            groupId: expense.groupId,
            authorType: DB.AuthorType.User,
            key: uuidv4(),
            attachments: {
                create: {
                    type: DB.MessageAttachmentType.Expense,
                    expenseId: expense.id,
                },
            },
        },
    });
};
