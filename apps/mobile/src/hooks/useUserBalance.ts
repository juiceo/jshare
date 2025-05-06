import { useMemo } from 'react';

import { getBalanceForParticipant } from '@jshare/common';
import type { DB } from '@jshare/db';

import type { Docs } from '~/lib/store/collections';

export const useUserBalance = (args: {
    userId: string;
    currency: DB.CurrencyCode;
    expenses: Docs.Expense[];
    payments: Docs.Payment[];
}) => {
    const { userId, currency, expenses, payments } = args;

    const balance = useMemo(() => {
        const allPayments = payments.map((p) => p.data);
        const paymentsPaid = allPayments.filter((p) => p.payerId === userId);
        const paymentsReceived = allPayments.filter((p) => p.recipientId === userId);

        const allExpenses = expenses.map((e) => e.data);
        const expensesPaid = allExpenses.filter((e) => e.payerId === userId);
        const expenseShares = allExpenses
            .flatMap((e) => e.shares)
            .filter((s) => s.userId === userId);
        return getBalanceForParticipant({
            userId,
            paymentsPaid,
            paymentsReceived,
            currency,
            expensesPaid,
            expenseShares,
        });
    }, [currency, expenses, payments, userId]);

    return balance;
};
