import type { DB } from '@jshare/types';
import { distributeAmountEvenly } from '@jshare/util';

import type { ExpenseShare, ExpenseSharesByUser } from '~/components/ExpenseShares/types';

export const getStatusForUser = (args: {
    userId: string;
    shares: ExpenseSharesByUser;
}): 'active' | 'inactive' | 'locked' => {
    const userShare = args.shares[args.userId];
    if (!userShare || !userShare.enabled) return 'inactive';
    if (userShare.fixedAmount) return 'locked';
    return 'active';
};

export const getAmountByUser = (
    shares: ExpenseSharesByUser,
    expenseAmount: number
): Record<string, number> => {
    let remainingAmount = expenseAmount;
    const remainingUserIds: string[] = [];
    const result: Record<string, number> = Object.entries(shares).reduce(
        (result, [userId, share]) => {
            if (!share.enabled) return result;
            if (share.fixedAmount) {
                remainingAmount -= share.fixedAmount;
                result[userId] = share.fixedAmount;
            } else {
                remainingUserIds.push(userId);
            }
            return result;
        },
        {} as Record<string, number>
    );

    if (remainingUserIds.length > 0) {
        const remainderShares = distributeAmountEvenly(remainingAmount, remainingUserIds.length);
        remainingUserIds.forEach((userId, index) => {
            result[userId] = remainderShares[index];
        });
    }

    return result;
};

export const getInitialShares = (args: {
    groupMembers: DB.GroupParticipant[];
}): ExpenseSharesByUser => {
    return args.groupMembers.reduce((result, member) => {
        return {
            ...result,
            [member.userId]: DEFAULT_SHARE,
        };
    }, {});
};

export const DEFAULT_SHARE: ExpenseShare = {
    enabled: true,
    fixedAmount: null,
};
