import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { Skeleton } from 'moti/skeleton';

import { formatAmount } from '@jshare/common';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';

const screenW = Dimensions.get('window').width;

export type ChatMessageExpenseAttachmentProps = {
    expenseId: string;
};

const ExpenseSkeleton = () => {
    return (
        <Box br="xl" style={{ overflow: 'hidden' }}>
            <Skeleton radius="square" width={screenW * 0.6} height={screenW * 0.6}></Skeleton>
        </Box>
    );
};

const ExpenseDeleted = () => {
    return (
        <Stack
            bg="background.secondary"
            center
            style={{ width: screenW * 0.6, height: screenW * 0.6 }}
        >
            <Typography strikeThrough variant="h4" color="tertiary">
                Expense deleted
            </Typography>
        </Stack>
    );
};

export const ChatMessageExpenseAttachment = observer((props: ChatMessageExpenseAttachmentProps) => {
    const router = useRouter();
    const user = SessionStore.user;

    const expense = Store.expenses.findById(props.expenseId);
    const isLoading = Store.expenses.isLoading();

    if (!expense && isLoading) {
        /**
         * TODO: Figure out how to differentiate between loading and not found state
         */
        return <ExpenseSkeleton />;
    }

    if (!expense) {
        return <ExpenseDeleted />;
    }

    const ownBalance = (() => {
        const paid = expense.data.payerId === user.id ? expense.data.amount : 0;
        const ownShare = expense.data.shares.find((share) => share.userId === user.id);
        const received = ownShare ? ownShare.amount : 0;

        return paid - received;
    })();

    return (
        <BorderlessButton
            activeOpacity={0.9}
            onPress={() => {
                router.push({
                    pathname: '/group/[groupId]/expense/[expenseId]',
                    params: { groupId: expense.data.groupId, expenseId: expense.id },
                });
            }}
        >
            <Stack bg="background.secondary" p="2xl">
                <Stack column center br="xl" mb="md" spacing="md">
                    <Avatar userId={expense.data.payerId} size="sm" />
                    <Typography variant="caption" color="tertiary" align="center">
                        <UserName userId={expense.data.payerId} variant="short" /> paid
                    </Typography>
                </Stack>
                <Stack center p="2xl">
                    <Typography
                        variant="h1"
                        align="center"
                        strikeThrough={!!expense.data.archived}
                        color={expense.data.archived ? 'secondary' : 'primary'}
                    >
                        {formatAmount(expense.data.amount, expense.data.currency)}
                    </Typography>
                    <Typography variant="caption" color="secondary" align="center">
                        {expense.data.description}
                    </Typography>
                </Stack>
                {!expense.data.archived && ownBalance !== 0 && (
                    <Stack column center>
                        <StatusBadge
                            prefix="You:"
                            amount={ownBalance}
                            currency={expense.data.currency}
                            backgroundColor="background.tertiary"
                            small
                        />
                    </Stack>
                )}
            </Stack>
        </BorderlessButton>
    );
});
