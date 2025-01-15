import { sortBy } from 'lodash';

import type { Expense, ExpenseShare, GroupParticipant, Payment, Profile } from '@jshare/db/models';

import { getInCurrency } from '../money';
import { toObject } from '../util';
import type { BalanceObject } from './types';

export const getEmptyBalanceObject = (args: {
    currency: string;
    participant: GroupParticipant & { user: Profile };
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
    expenses: (Expense & { shares: ExpenseShare[] })[];
    payments: Payment[];
    participants: (GroupParticipant & { user: Profile })[];
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
