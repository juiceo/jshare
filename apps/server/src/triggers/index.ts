import { sleep } from '@jshare/common';
import type { Prisma } from '@jshare/db';

import { adminDb } from '../services/db';
import { exponentialBackoff } from '../util/async';
import { onExpenseCreated } from './onExpenseCreated';
import { onExpenseUpdated } from './onExpenseUpdated';
import { onGroupCreated } from './onGroupCreated';
import { onGroupParticipantCreated } from './onGroupParticipantCreated';
import { onMessageCreated } from './onMessageCreated';
import { onPaymentCreated } from './onPaymentCreated';

export const onModelUpdated = async (model: Prisma.ModelName, id: string) => {
    await sleep(10);
    try {
        switch (model) {
            case 'Expense': {
                const expense = await exponentialBackoff(async () =>
                    adminDb.expense.findUniqueOrThrow({ where: { id } })
                );

                await onExpenseUpdated(expense);
                break;
            }
        }
    } catch (err) {
        console.error(`Error onModelUpdated: ${model} ${id}`, err);
    }
};

export const onModelCreated = async (model: Prisma.ModelName, id: string) => {
    await sleep(10);
    try {
        switch (model) {
            case 'Expense': {
                const expense = await exponentialBackoff(async () =>
                    adminDb.expense.findUniqueOrThrow({ where: { id } })
                );

                await onExpenseCreated(expense);
                break;
            }
            case 'Payment': {
                const payment = await exponentialBackoff(async () =>
                    adminDb.payment.findUniqueOrThrow({ where: { id } })
                );

                await onPaymentCreated(payment);
                break;
            }
            case 'Message': {
                const message = await exponentialBackoff(async () =>
                    adminDb.message.findUniqueOrThrow({ where: { id } })
                );

                await onMessageCreated(message);
                break;
            }
            case 'Group': {
                const group = await exponentialBackoff(async () =>
                    adminDb.group.findUniqueOrThrow({ where: { id } })
                );

                await onGroupCreated(group);
                break;
            }
            case 'GroupParticipant': {
                const groupParticipant = await exponentialBackoff(async () =>
                    adminDb.groupParticipant.findUniqueOrThrow({ where: { id } })
                );

                await onGroupParticipantCreated(groupParticipant);
                break;
            }
        }
    } catch (err) {
        console.error(`Error onModelCreated: ${model} ${id}`, err);
    }
};
