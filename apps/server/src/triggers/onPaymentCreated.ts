import { v4 as uuidv4 } from 'uuid';

import { broadcastRealtimeUpdate, formatAmount } from '@jshare/common';
import { DB } from '@jshare/db';

import { db } from '../services/db';
import { supabase } from '../services/supabase';

export const onPaymentCreated = async (payment: DB.Payment) => {
    const groupParticipants = await db.groupParticipant.findMany({
        where: {
            groupId: payment.groupId,
        },
    });

    for (const subscriber of groupParticipants) {
        broadcastRealtimeUpdate(supabase, subscriber.userId, {
            model: 'Payment',
            data: payment,
        });
    }

    await db.message.create({
        data: {
            groupId: payment.groupId,
            authorType: DB.AuthorType.System,
            text: `@user=${payment.payerId} paid ${formatAmount(payment.amount, payment.currency)} to @user=${payment.recipientId}`,
            key: uuidv4(),
        },
    });
};
