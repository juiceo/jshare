import { sortBy } from 'lodash';

import { type DB } from '@jshare/types';

import { getInCurrency } from '../money';
import type { BalanceObject } from './types';

export const getEmptyBalanceObject = (args: { currency: string }): BalanceObject => {
    return {
        currency: args.currency,
        paid: 0,
        received: 0,
        balance: 0,
    };
};

export const getBalanceByParticipant = (args: {
    expenses: (DB.Expense & { shares: DB.ExpenseShare[] })[];
    payments: DB.Payment[];
    participants: DB.GroupParticipant[];
    currency: string;
}): BalanceObject[] => {
    const balances: Record<string, BalanceObject> = {};

    const addToPaid = (userId: string, amount: number) => {
        if (!balances[userId]) {
            balances[userId] = getEmptyBalanceObject({ currency: args.currency });
        }
        balances[userId].paid += amount;
        balances[userId].balance += amount;
    };

    const addToReceived = (userId: string, amount: number) => {
        if (!balances[userId]) {
            balances[userId] = getEmptyBalanceObject({ currency: args.currency });
        }
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
