import { sumBy } from 'lodash';

import type { DB } from '@jshare/types';
import { distributeAmountEvenly } from '@jshare/util';

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

export const getTotalFromShares = (shares: Pick<DB.ExpenseShare, 'amount'>[]) => {
    return sumBy(shares, (share) => share.amount);
};

export const getSharesWithFloatingAmounts = <
    TShare extends Pick<DB.ExpenseShare, 'amount' | 'locked' | 'userId'>,
>(args: {
    expenseAmount: number;
    shares: TShare[];
}) => {
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

export const removeShare = <TShare extends Pick<DB.ExpenseShare, 'amount' | 'locked' | 'userId'>>(
    shares: TShare[],
    userId: string
) => {
    const userShare = shares.find((share) => share.userId === userId);
    if (!userShare) return shares;
    const filteredShares = shares.filter((share) => share.userId !== userId);
    const floatingShares = getFloatingShares(filteredShares);
    const amountsToDistribute = distributeAmountEvenly(userShare.amount, floatingShares.length);

    return filteredShares.map((share) => {
        if (share.locked) return share;
        return {
            ...share,
            amount: share.amount + (amountsToDistribute.shift() ?? 0),
        };
    });
};

export const addShare = <TShare extends Pick<DB.ExpenseShare, 'amount' | 'locked' | 'userId'>>(
    shares: TShare[],
    newShare: TShare
): TShare[] => {
    const floatingShares = getFloatingShares(shares);
    const floatingAmount = getTotalFromShares(floatingShares);
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
            ...newShare,
            amount: amountsToDistribute.shift() ?? 0,
            locked: false,
        },
    ];
};
