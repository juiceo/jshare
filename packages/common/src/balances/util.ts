import { sortBy } from 'lodash';

import { type DB } from '@jshare/types';

import { getInCurrency } from '../money';
import { toObject } from '../util';
import type { BalanceObject } from './types';

export const getEmptyBalanceObject = (args: {
    currency: string;
    participant: DB.GroupParticipant<{ user: true }>;
}): BalanceObject => {
    return {
        participant: args.participant,
        currency: args.currency,
        paid: 0,
        received: 0,
        balance: 0,
    };
};

export const getBalanceByParticipant = (args: {
    expenses: (DB.Expense & { shares: DB.ExpenseShare[] })[];
    payments: DB.Payment[];
    participants: DB.GroupParticipant<{ user: true }>[];
    currency: string;
}): BalanceObject[] => {
    const balances: Record<string, BalanceObject> = toObject({
        data: args.participants,
        key: (item) => item.userId,
        value: (item) => getEmptyBalanceObject({ currency: args.currency, participant: item }),
    });

    const addToPaid = (userId: string, amount: number) => {
        if (!balances[userId]) return;
        balances[userId].paid += amount;
        balances[userId].balance += amount;
    };

    const addToReceived = (userId: string, amount: number) => {
        if (!balances[userId]) return;
        balances[userId].received += amount;
        balances[userId].balance -= amount;
    };

    args.expenses.forEach((expense) => {
        const expenseAmount = getInCurrency(expense, args.currency);
        if (expenseAmount) {
            addToPaid(expense.payerId, expenseAmount);
        }

        expense.shares.forEach((share) => {
            const shareAmount = getInCurrency(share, args.currency);
            if (shareAmount) {
                addToReceived(share.userId, shareAmount);
            }
        });
    });

    args.payments.forEach((payment) => {
        const paymentAmount = getInCurrency(payment, args.currency);
        if (paymentAmount) {
            addToPaid(payment.payerId, paymentAmount);
            addToReceived(payment.recipientId, paymentAmount);
        }
    });

    return sortBy(Object.values(balances), (item) => -item.balance);
};
