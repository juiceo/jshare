import { sumBy } from 'lodash';

import { distributeAmountEvenly } from '@jshare/common';
import { ExpenseShareMock, type DB } from '@jshare/types';

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
