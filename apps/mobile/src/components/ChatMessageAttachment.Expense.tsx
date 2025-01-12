import { Dimensions } from 'react-native';
import { Skeleton } from 'moti/skeleton';

import { formatAmount, getUserShortName } from '@jshare/common';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { useSession } from '~/wrappers/SessionProvider';
import { withSuspense } from '~/wrappers/withSuspense';

const screenW = Dimensions.get('window').width;

export type ChatMessageExpenseAttachmentProps = {
    expenseId: string;
};

const ExpenseSkeleton = () => {
    return (
        <Box br="2xl" style={{ overflow: 'hidden' }}>
            <Skeleton radius="square" width={screenW * 0.6} height={screenW * 0.6}></Skeleton>
        </Box>
    );
};

export const ChatMessageExpenseAttachment = withSuspense(
    (props: ChatMessageExpenseAttachmentProps) => {
        const { session } = useSession();
        const userId = session?.user.id;
        const [expense] = trpc.expenses.get.useSuspenseQuery({ id: props.expenseId });
        const [payerProfile] = trpc.profiles.getById.useSuspenseQuery({ id: expense.payerId });

        if (!expense) return <ExpenseSkeleton />;

        const ownShare = expense.shares.find((share) => share.userId === userId);

        return (
            <Stack>
                <Stack bg="background.elevation1" p="2xl">
                    <Stack column center br="xl" mb="md" spacing="md">
                        <Avatar userId={expense.payerId} size="sm" />
                        <Typography variant="caption" color="hint" align="center">
                            {getUserShortName(payerProfile)} paid
                        </Typography>
                    </Stack>
                    <Stack center p="2xl">
                        <Typography variant="h1" align="center">
                            {formatAmount(expense.amount, expense.currency)}
                        </Typography>
                        <Typography variant="caption" color="secondary" align="center">
                            {expense.description}
                        </Typography>
                        {/* <Typography align="center" variant="h6" color="hint" style={{ lineHeight: 0 }}>
                        Your share: {formatAmount(getOwnShareAmount(), expense.currency)}
                    </Typography> */}
                    </Stack>
                    <Stack column center>
                        <Typography variant="h6">
                            Your share:{' '}
                            {ownShare
                                ? formatAmount(ownShare.amount, ownShare.currency)
                                : formatAmount(0, expense.currency)}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        );
    },
    <ExpenseSkeleton />
);
