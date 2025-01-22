import { v4 as uuidv4 } from 'uuid';

import { formatAmount } from '@jshare/common';
import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onPaymentCreated = async (payment: DB.Payment) => {
    await db.message.create({
        data: {
            groupId: payment.groupId,
            authorType: DB.AuthorType.System,
            text: `@user=${payment.payerId} paid ${formatAmount(payment.amount, payment.currency)} to @user=${payment.recipientId}`,
            key: uuidv4(),
        },
    });
};
