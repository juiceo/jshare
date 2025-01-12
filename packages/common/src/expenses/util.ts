import { sortBy, sumBy } from 'lodash';

import { ExpenseShareMock, type DB } from '@jshare/types';
import { distributeAmountEvenly } from '@jshare/util';

import { convertAmount } from '../money';

export const getLockedShares = (shares: DB.ExpenseShare[]): DB.ExpenseShare[] => {
    return shares.filter((share) => share.locked);
};

export const getFloatingShares = (shares: DB.ExpenseShare[]): DB.ExpenseShare[] => {
    return shares.filter((share) => !share.locked);
};

export const getTotalFromShares = (shares: DB.ExpenseShare[]): number => {
    return sumBy(shares, (share) => share.amount);
};

export const getSharesWithUpdatedAmount = (args: {
    expenseAmount: number;
    shares: DB.ExpenseShare[];
}): DB.ExpenseShare[] => {
    const { expenseAmount, shares } = args;
    const lockedShares = getLockedShares(shares);
    const floatingShares = getFloatingShares(shares);
    const totalLockedAmount = getTotalFromShares(lockedShares);
    const totalFloatingAmount = expenseAmount - totalLockedAmount;
    const floatingAmounts = distributeAmountEvenly(totalFloatingAmount, floatingShares.length);

    return floatingShares.reduce((result, share) => {
        const shareIndex = result.findIndex((item) => item.userId === share.userId);
        if (shareIndex === -1) {
            return result;
        }

        result[shareIndex].amount = floatingAmounts.shift() ?? 0;
        return result;
    }, shares);
};

export const addShare = (
    shares: DB.ExpenseShare[],
    expenseAmount: number,
    userId: string
): DB.ExpenseShare[] => {
    const lockedShares = getLockedShares(shares);
    const floatingShares = getFloatingShares(shares);
    const floatingAmount = expenseAmount - getTotalFromShares(lockedShares);
    const amountsToDistribute = distributeAmountEvenly(floatingAmount, floatingShares.length + 1);

    return [
        ...shares.map((share) => {
            if (share.locked) return share;
            return {
                ...share,
                amount: amountsToDistribute.shift() ?? 0,
            };
        }),
        ExpenseShareMock.build({
            amount: amountsToDistribute.shift() ?? 0,
            userId,
            locked: false,
        }),
    ];
};

export const updateShare = (
    shares: DB.ExpenseShare[],
    expenseAmount: number,
    updates: Pick<DB.ExpenseShare, 'amount' | 'userId' | 'locked'>
): DB.ExpenseShare[] => {
    let isFound = false;
    const updatedShares = shares.map((share, index) => {
        if (share.userId === updates.userId) {
            isFound = true;
            return {
                ...share,
                ...updates,
            };
        }
        return share;
    });

    if (!isFound) return [...shares];

    return getSharesWithUpdatedAmount({
        expenseAmount,
        shares: updatedShares,
    });
};

export const removeShare = (
    shares: DB.ExpenseShare[],
    expenseAmount: number,
    userId: string
): DB.ExpenseShare[] => {
    const filteredShares = shares.filter((share) => share.userId !== userId);
    const lockedShares = getLockedShares(filteredShares);
    const floatingShares = getFloatingShares(filteredShares);
    const floatingAmount = expenseAmount - getTotalFromShares(lockedShares);
    const amountsToDistribute = distributeAmountEvenly(floatingAmount, floatingShares.length);

    return filteredShares.map((share) => {
        if (share.locked) return share;
        return {
            ...share,
            amount: amountsToDistribute.shift() ?? 0,
        };
    });
};

export const getDefaultShares = (groupMembers: DB.GroupParticipant[]): DB.ExpenseShare[] => {
    return groupMembers.map((member) => {
        return getDefaultShare(member.userId);
    });
};

export const getDefaultShare = (userId: string): DB.ExpenseShare => {
    return ExpenseShareMock.build({
        userId,
        amount: 0,
        locked: false,
    });
};

export const getTotalInCurrency = (args: {
    expenses: Pick<DB.Expense<{ shares: true }>, 'currency' | 'amount' | 'payerId' | 'shares'>[];
    currency: string;
    exchangeRates: DB.ExchangeRates;
}): number => {
    return args.expenses.reduce((result, expense) => {
        const expenseAmount =
            expense.currency === args.currency
                ? expense.amount
                : convertAmount({
                      from: expense.currency,
                      to: args.currency,
                      amount: expense.amount,
                      exchangeRates: args.exchangeRates,
                  });
        return result + expenseAmount;
    }, 0);
};

export const getTotalsByParticipant = (args: {
    expenses: Pick<DB.Expense<{ shares: true }>, 'currency' | 'amount' | 'payerId' | 'shares'>[];
    participants: DB.GroupParticipant<{ user: true }>[];
    currency: string;
    exchangeRates: DB.ExchangeRates;
}): {
    participant: DB.GroupParticipant<{ user: true }>;
    paid: number;
    received: number;
    balance: number;
}[] => {
    const resultByUserId = args.expenses.reduce(
        (result, expense) => {
            const expenseAmount =
                expense.currency === args.currency
                    ? expense.amount
                    : convertAmount({
                          from: expense.currency,
                          to: args.currency,
                          amount: expense.amount,
                          exchangeRates: args.exchangeRates,
                      });
            if (!result[expense.payerId]) {
                result[expense.payerId] = {
                    paid: 0,
                    received: 0,
                    balance: 0,
                };
            }
            result[expense.payerId].paid += expenseAmount;
            result[expense.payerId].balance += expenseAmount;

            expense.shares.forEach((share) => {
                const shareAmount =
                    args.currency === share.currency
                        ? share.amount
                        : convertAmount({
                              from: share.currency,
                              to: args.currency,
                              amount: share.amount,
                              exchangeRates: args.exchangeRates,
                          });
                if (!result[share.userId]) {
                    result[share.userId] = {
                        paid: 0,
                        received: 0,
                        balance: 0,
                    };
                }
                result[share.userId].received += shareAmount;
                result[share.userId].balance -= shareAmount;
            });

            return result;
        },
        {} as Record<string, { paid: number; received: number; balance: number }>
    );

    const participantsWithTotals = args.participants.map((participant) => {
        const totals = resultByUserId[participant.userId];
        return {
            participant,
            paid: totals?.paid ?? 0,
            received: totals?.received ?? 0,
            balance: totals?.balance ?? 0,
        };
    });

    return sortBy(participantsWithTotals, 'balance');
};
