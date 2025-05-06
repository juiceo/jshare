import { chain, cloneDeep, sortBy, sumBy } from 'lodash';

import type { DB } from '@jshare/db';

import { getInCurrency, sumInCurrency } from '../money';
import { toObject } from '../util';
import type { BalanceObject, PaymentObject } from './types';

export const getEmptyBalanceObject = (args: {
    currency: DB.CurrencyCode;
    userId: string;
}): BalanceObject => {
    return {
        userId: args.userId,
        currency: args.currency,
        paid: 0,
        received: 0,
        balance: 0,
    };
};

export const getBalanceByParticipant = (args: {
    expenses: DB.Expense<{ shares: true }>[];
    payments: DB.Payment[];
    participants: DB.GroupParticipant[];
    currency: DB.CurrencyCode;
}): BalanceObject[] => {
    const balances: Record<string, BalanceObject> = toObject({
        data: args.participants,
        key: (item) => item.userId,
        value: (item) => getEmptyBalanceObject({ currency: args.currency, userId: item.userId }),
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

export const getBalanceForParticipant = (args: {
    userId: string;
    expensesPaid: DB.Expense[];
    expenseShares: DB.ExpenseShare[];
    paymentsPaid: DB.Payment[];
    paymentsReceived: DB.Payment[];
    currency: DB.CurrencyCode;
}): BalanceObject => {
    const totalPaid =
        sumInCurrency(args.expensesPaid, args.currency) +
        sumInCurrency(args.paymentsPaid, args.currency);
    const totalReceived =
        sumInCurrency(args.paymentsReceived, args.currency) +
        sumInCurrency(args.expenseShares, args.currency);

    return {
        currency: args.currency,
        userId: args.userId,
        paid: totalPaid,
        received: totalReceived,
        balance: totalPaid - totalReceived,
    };
};

export const getPaymentsFromBalances = (_balances: BalanceObject[]): PaymentObject[] => {
    const balances = cloneDeep(_balances);
    const payments: PaymentObject[] = [];

    const debtors = sortBy(
        balances.filter((b) => b.balance < 0),
        (b) => b.balance
    );
    const creditors = sortBy(
        balances.filter((b) => b.balance > 0),
        (b) => -b.balance
    );

    const totalDebt = sumBy(debtors, (b) => b.balance);
    const totalCredit = sumBy(creditors, (b) => b.balance);

    if (Math.abs(totalDebt) !== totalCredit) {
        throw new Error(
            `The total balance is not zero: ${totalDebt} debt vs ${totalCredit} credit`
        );
    }

    const duplicateUserIds = chain(balances)
        .countBy('userId')
        .pickBy((count) => count > 1)
        .entries()
        .map(([userId, count]) => ({ userId, count }))
        .value();

    if (duplicateUserIds.length > 0) {
        throw new Error(
            `Cannot have duplicate userIds in balances: ${duplicateUserIds.map((u) => 'user ' + u.userId + ' appears ' + u.count + ' times')}`
        );
    }

    let i = 0; // Pointer for debtors
    let j = 0; // Pointer for creditors

    // Match debtors to creditors
    while (i < debtors.length && j < creditors.length) {
        const debtor = debtors[i];
        const creditor = creditors[j];

        const paymentAmount = Math.min(Math.abs(debtor.balance), creditor.balance);

        payments.push({
            fromUserId: debtor.userId,
            toUserId: creditor.userId,
            currency: debtor.currency, // Assuming all balances are in the same currency
            amount: paymentAmount,
        });

        // Reduce the balances
        debtor.balance += paymentAmount;
        creditor.balance -= paymentAmount;

        // Move to the next debtor or creditor if their balance is zero
        if (debtor.balance === 0) i++;
        if (creditor.balance === 0) j++;
    }

    return sortBy(payments, (p) => -p.amount);
};
