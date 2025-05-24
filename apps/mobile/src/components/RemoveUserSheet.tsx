import { useCallback, useMemo, useState } from 'react';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { formatAmount, getBalanceByParticipant } from '@jshare/common';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { UserSelect } from '~/components/UserSelect';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { trpc } from '~/lib/trpc';
import { toast } from '~/state/toast';
import { useGroupContext } from '~/wrappers/GroupContext';

export type RemoveUserSheetProps = {
    userId: string;
    onClose: () => void;
};

export const RemoveUserSheet = observer((props: RemoveUserSheetProps) => {
    const { userId, onClose } = props;
    const router = useRouter();
    const user = SessionStore.user;
    const { group, groupId, groupMemberIds } = useGroupContext();

    const removeParticipant = useMutation(
        trpc.groupParticipants.removeParticipant.mutationOptions()
    );
    const [transferTo, setTransferTo] = useState<string | null>(null);

    const expenses = Store.expenses.findMany({
        groupId,
    });

    const payments = Store.payments.findMany({
        groupId,
    });

    const isSelf = userId === user.id;

    const balances = useMemo(() => {
        return getBalanceByParticipant({
            expenses: expenses.map((e) => e.data),
            payments: payments.map((p) => p.data),
            participants: group.data.participants,
            currency: group.data.currency,
        });
    }, [expenses, payments, group.data.participants, group.data.currency]);

    const userBalance = useMemo(() => {
        return balances.find((b) => b.userId === userId);
    }, [balances, userId]);

    const userExpenses = useMemo(() => {
        return expenses.filter(
            (e) =>
                e.data.payerId === userId ||
                e.data.ownerId === userId ||
                e.data.shares.some((s) => s.userId === userId)
        );
    }, [expenses, userId]);

    const userPayments = useMemo(() => {
        return payments.filter((p) => p.data.recipientId === userId || p.data.payerId === userId);
    }, [payments, userId]);

    const hasExpensesOrPayments = useMemo(() => {
        return userExpenses.length > 0 || userPayments.length > 0;
    }, [userExpenses, userPayments]);

    const isValid = useMemo(() => {
        if (hasExpensesOrPayments) {
            return !!transferTo;
        }
        return true;
    }, [hasExpensesOrPayments, transferTo]);

    const handleRemove = useCallback(async () => {
        try {
            await removeParticipant.mutateAsync({
                groupId,
                userId,
                transferTo,
            });
            if (isSelf) {
                toast.info('You left the group');
                router.replace('/(authenticated)/(tabs)/groups');
                Store.groups.disposeItem(groupId);
                Store.groups.invalidate();
                Store.messages.invalidate();
                Store.expenses.invalidate();
                Store.payments.invalidate();
            } else {
                toast.info('User removed from group');
                Store.groups.invalidate();
                Store.expenses.invalidate();
                Store.payments.invalidate();
            }
            onClose();
        } catch {
            toast.error('Something went wrong');
        }
    }, [removeParticipant, groupId, userId, transferTo, isSelf, onClose, router]);

    return (
        <BottomSheet isOpen={!!userId} onClose={onClose}>
            <BottomSheetView>
                <Stack column p="xl" spacing="xl" pb="3xl">
                    <Typography variant="h3" align="center">
                        {isSelf ? 'Leave group' : 'Remove user'}
                    </Typography>
                    {hasExpensesOrPayments ? (
                        <Typography variant="caption" align="center">
                            {isSelf ? (
                                'You are '
                            ) : (
                                <>
                                    <Typography variant="caption" color="accent.primary">
                                        <UserName userId={userId} variant="full" />
                                    </Typography>
                                    {' is'}
                                </>
                            )}
                            part of some expenses or payments in this group. Please select which
                            user to transfer the balance to.
                        </Typography>
                    ) : (
                        <Typography variant="caption" align="center">
                            {isSelf ? (
                                'You are '
                            ) : (
                                <>
                                    <Typography variant="caption" color="accent.primary">
                                        <UserName userId={userId} variant="full" />
                                    </Typography>
                                    {' is'}
                                </>
                            )}
                            not yet part of any expenses or payments in this group.
                        </Typography>
                    )}
                    <Stack
                        row
                        alignCenter
                        spacing="xl"
                        background="background.level2"
                        p="xl"
                        br="xl"
                    >
                        <Avatar userId={userId} size="lg" />
                        <Stack column spacing="xs">
                            <Typography variant="h6" color="secondary">
                                <UserName userId={userId} variant="full" />
                            </Typography>
                            <Stack column spacing="none">
                                <Typography variant="caption" color="tertiary" m="none">
                                    Paid:{' '}
                                    {formatAmount(userBalance?.paid ?? 0, group.data.currency)}
                                </Typography>
                                <Typography variant="caption" color="tertiary" m="none">
                                    Received:{' '}
                                    {formatAmount(userBalance?.received ?? 0, group.data.currency)}
                                </Typography>
                                <Typography variant="caption" color="tertiary" m="none">
                                    Balance:{' '}
                                    {formatAmount(userBalance?.balance ?? 0, group.data.currency)}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    {hasExpensesOrPayments && (
                        <UserSelect
                            label="Transfer balance to"
                            placeholder="Select user"
                            value={transferTo ?? undefined}
                            onChange={(value) => setTransferTo(value)}
                            userIds={groupMemberIds.filter((id) => id !== userId)}
                            backgroundColor="background.level2"
                        />
                    )}
                    <Button
                        color="error"
                        disabled={!isValid}
                        loading={removeParticipant.isPending}
                        onPress={handleRemove}
                    >
                        {isSelf ? 'Leave group' : 'Remove from group'}
                    </Button>
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
});
