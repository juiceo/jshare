import { sumBy } from 'lodash';
import { z } from 'zod';

import { zDB, type DB } from '@jshare/db';

import { getConversionDetails, getExchangeRate } from '../money';
import { distributeAmountEvenly } from '../util';

export const zPartialExpenseShare = zDB.models.ExpenseShareSchema.pick({
    amount: true,
    userId: true,
    locked: true,
});
export type PartialExpenseShare = z.infer<typeof zPartialExpenseShare>;

export const getLockedShares = <TShare extends Pick<DB.ExpenseShare, 'locked'>>(
    shares: TShare[]
): TShare[] => {
    return shares.filter((share) => share.locked);
};

export const getFloatingShares = <TShare extends Pick<DB.ExpenseShare, 'locked'>>(
    shares: TShare[]
): TShare[] => {
    return shares.filter((share) => !share.locked);
};

export const getTotalFromShares = (shares: Pick<DB.ExpenseShare, 'amount'>[]): number => {
    return sumBy(shares, (share) => share.amount);
};

export const getSharesWithUpdatedAmount = (args: {
    expenseAmount: number;
    shares: PartialExpenseShare[];
}): PartialExpenseShare[] => {
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
    shares: PartialExpenseShare[],
    expenseAmount: number,
    userId: string
): PartialExpenseShare[] => {
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
        {
            amount: amountsToDistribute.shift() ?? 0,
            userId,
            locked: false,
        },
    ];
};

export const updateShare = (
    shares: PartialExpenseShare[],
    expenseAmount: number,
    updates: Pick<PartialExpenseShare, 'amount' | 'userId' | 'locked'>
): PartialExpenseShare[] => {
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
    shares: PartialExpenseShare[],
    expenseAmount: number,
    userId: string
): PartialExpenseShare[] => {
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

export const getDefaultShares = (groupMembers: DB.GroupParticipant[]): PartialExpenseShare[] => {
    return groupMembers.map((member) => {
        return getDefaultShare(member.userId);
    });
};

export const getDefaultShare = (userId: string): PartialExpenseShare => {
    return {
        userId,
        amount: 0,
        locked: false,
    };
};

export const isValidExpense = (args: {
    amount: number;
    currency: DB.CurrencyCode;
    shares: PartialExpenseShare[];
}): boolean => {
    return args.amount === getTotalFromShares(args.shares);
};

export const convertExpense = (args: {
    expense: {
        amount: number;
        currency: DB.CurrencyCode;
        shares: PartialExpenseShare[];
    };
    conversion: {
        to: DB.CurrencyCode;
        exchangeRates: DB.ExchangeRates;
    } | null;
}): {
    amount: number;
    currency: DB.CurrencyCode;
    conversion?: DB.CurrencyConversion;
    shares: (PartialExpenseShare & { conversion?: DB.CurrencyConversion })[];
} => {
    const { conversion } = args;
    if (!conversion || conversion.to === args.expense.currency) return args.expense;
    const convertedShares = args.expense.shares.map((share) => {
        return {
            ...share,
            conversion: getConversionDetails({
                sourceCurrency: args.expense.currency,
                sourceAmount: share.amount,
                currency: conversion.to,
                exchangeRates: conversion.exchangeRates,
            }),
        };
    });

    const rate = getExchangeRate({
        from: args.expense.currency,
        to: conversion.to,
        exchangeRates: conversion.exchangeRates,
    });
    const convertedTotal = sumBy(convertedShares, (share) => share.conversion.amount);

    return {
        amount: args.expense.amount,
        currency: args.expense.currency,
        conversion: {
            sourceCurrency: args.expense.currency,
            sourceAmount: args.expense.amount,
            currency: conversion.to,
            amount: convertedTotal,
            exchangeRate: rate,
            exchangeRatesId: conversion.exchangeRates.id,
        },
        shares: convertedShares,
    };
};
