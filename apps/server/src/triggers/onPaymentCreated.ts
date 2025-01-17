import { v4 as uuidv4 } from 'uuid';

import { formatAmount, getUserShortName } from '@jshare/common';
import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onPaymentCreated = async (payment: DB.Payment) => {
    const [payer, recipient] = await Promise.all([
        db.profile.findUnique({
            where: {
                userId: payment.payerId,
            },
        }),
        db.profile.findUnique({
            where: {
                userId: payment.recipientId,
            },
        }),
    ]);
    if (!payer || !recipient) return;
    await db.message.create({
        data: {
            groupId: payment.groupId,
            authorType: DB.AuthorType.System,
            text: `${getUserShortName(payer)} paid ${formatAmount(payment.amount, payment.currency)} to ${getUserShortName(recipient)}`,
            key: uuidv4(),
        },
    });
};
