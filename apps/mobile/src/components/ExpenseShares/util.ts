import type { DB, LocalExpenseShare } from '@jshare/types';
import { distributeAmountEvenly } from '@jshare/util';

export const getTotalLockedAmount = (args: {
    sharesByUserId: Record<string, LocalExpenseShare>;
}) => {
    return Object.values(args.sharesByUserId).reduce((result, share) => {
        if (share.amount && share.locked) return result + share.amount;
        return result;
    }, 0);
};

export const getSharesWithFloatingAmounts = (args: {
    expenseAmount: number;
    sharesByUserId: Record<string, LocalExpenseShare>;
    groupMembers: DB.GroupParticipant<{ user: true }>[];
}) => {
    const { expenseAmount, sharesByUserId, groupMembers } = args;
    const totalLockedAmount = getTotalLockedAmount({ sharesByUserId });
    const totalFloatingAmount = expenseAmount - totalLockedAmount;
    const floatingMembers = groupMembers.filter((member) => {
        const userShare = sharesByUserId[member.userId];
        return !userShare || (userShare.enabled && !userShare?.locked);
    });
    const floatingAmounts = distributeAmountEvenly(totalFloatingAmount, floatingMembers.length);

    return floatingMembers.reduce((result, member, index) => {
        const userId = member.userId;
        return {
            ...result,
            [member.userId]: {
                ...sharesByUserId[userId],
                enabled: true,
                locked: false,
                amount: floatingAmounts[index],
            },
        };
    }, sharesByUserId);
};
