import { cloneDeep, sumBy } from 'lodash';
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

export const recalculateShares = (args: {
    shares: PartialExpenseShare[];
    expenseAmount: number;
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
    }, cloneDeep(shares));
};

export const addShare = (args: {
    shares: PartialExpenseShare[];
    share: PartialExpenseShare;
    expenseAmount: number;
}): PartialExpenseShare[] => {
    const { shares, share, expenseAmount } = args;

    if (shares.some((s) => s.userId === share.userId)) return shares;

    return recalculateShares({
        shares: [...shares, share],
        expenseAmount,
    });
};

export const updateShare = (args: {
    shares: PartialExpenseShare[];
    share: PartialExpenseShare;
    expenseAmount: number;
}): PartialExpenseShare[] => {
    const { shares, share, expenseAmount } = args;

    let isFound = false;
    const updatedShares = shares.map((_share, index) => {
        if (_share.userId === share.userId) {
            isFound = true;
            return share;
        }
        return _share;
    });

    if (!isFound) return [...shares];

    return recalculateShares({
        expenseAmount,
        shares: updatedShares,
    });
};

export const removeShare = (args: {
    shares: PartialExpenseShare[];
    userId: string;
    expenseAmount: number;
}): PartialExpenseShare[] => {
    const { shares, userId, expenseAmount } = args;

    return recalculateShares({
        shares: shares.filter((share) => share.userId !== userId),
        expenseAmount,
    });
};

export const transferShare = (args: {
    shares: PartialExpenseShare[];
    fromUserId: string;
    toUserId: string;
}): PartialExpenseShare[] => {
    const { shares, fromUserId, toUserId } = args;
    const expenseAmount = getTotalFromShares(shares);
    const fromShare = shares.find((share) => share.userId === fromUserId);
    const toShare = shares.find((share) => share.userId === toUserId);

    if (!fromShare) return shares;

    let updatedShares = removeShare({ shares, userId: fromUserId, expenseAmount });

    if (fromShare.amount === 0) {
        return updatedShares;
    }

    if (toShare) {
        updatedShares = updateShare({
            shares: updatedShares,
            share: {
                ...toShare,
                amount: fromShare.amount + toShare.amount,
                locked: true,
            },
            expenseAmount,
        });
    } else {
        updatedShares = addShare({
            shares: updatedShares,
            share: {
                ...fromShare,
                userId: toUserId,
            },
            expenseAmount,
        });
    }

    return updatedShares;
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
