import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Skeleton } from 'moti/skeleton';

import { formatAmount, getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';
import { trpc } from '~/lib/trpc';
import { useSession } from '~/wrappers/SessionProvider';
import { withSuspense } from '~/wrappers/withSuspense';

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

const ExpenseNotFound = () => {
    return (
        <Box br="xl" style={{ overflow: 'hidden' }} bg="background.main">
            <Stack width={screenW * 0.6} height={screenW * 0.6} center>
                <Typography variant="subtitle1" color="hint">
                    Expense not found
                </Typography>
            </Stack>
        </Box>
    );
};

export const ChatMessageExpenseAttachment = withSuspense(
    (props: ChatMessageExpenseAttachmentProps) => {
        const { session } = useSession();
        const router = useRouter();
        const userId = session?.user.id;
        const expense = useSuspenseQuery(
            trpc.z.expense.findUnique.queryOptions({
                where: { id: props.expenseId },
                include: { payer: true, shares: true },
            })
        ).data as DB.Expense<{ payer: true; shares: true }> | null;

        if (!expense) return null;

        const ownShare = expense.shares.find((share) => share.userId === userId);

        return (
            <BorderlessButton
                activeOpacity={0.9}
                onPress={() => {
                    router.push({
                        pathname: '/group/[groupId]/expense/[expenseId]',
                        params: { groupId: expense.groupId, expenseId: expense.id },
                    });
                }}
            >
                <Stack bg="background.elevation1" p="2xl">
                    <Stack column center br="xl" mb="md" spacing="md">
                        <Avatar userId={expense.payerId} size="sm" />
                        <Typography variant="caption" color="hint" align="center">
                            {getUserShortName(expense.payer)} paid
                        </Typography>
                    </Stack>
                    <Stack center p="2xl">
                        <Typography
                            variant="h1"
                            align="center"
                            strikeThrough={!!expense.archived}
                            color={expense.archived ? 'hint' : 'primary'}
                        >
                            {formatAmount(expense.amount, expense.currency)}
                        </Typography>
                        <Typography variant="caption" color="secondary" align="center">
                            {expense.description}
                        </Typography>
                    </Stack>
                    {!expense.archived && (
                        <Stack column center>
                            <Typography variant="h6">
                                Your share:{' '}
                                {ownShare
                                    ? formatAmount(ownShare.amount, ownShare.currency)
                                    : formatAmount(0, expense.currency)}
                            </Typography>
                        </Stack>
                    )}
                </Stack>
            </BorderlessButton>
        );
    },
    {
        loader: <ExpenseSkeleton />,
        fallback: <ExpenseNotFound />,
    }
);
