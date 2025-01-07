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

        const getOwnShareAmount = () => {
            const share = expense.shares.find((share) => share.userId === userId);
            return share?.amount ?? 0;
        };

        if (!expense) return <ExpenseSkeleton />;
        return (
            <Stack bg="background.elevation1">
                <Stack column center p="xl">
                    <Typography variant="caption" color="secondary" align="center">
                        {expense.description}
                    </Typography>
                </Stack>
                <Stack center p="3xl">
                    <Typography variant="h1" align="center">
                        {formatAmount(expense.amount, expense.currency)}
                    </Typography>
                    <Typography align="center" variant="h6" color="hint" style={{ lineHeight: 0 }}>
                        Your share: {formatAmount(getOwnShareAmount(), expense.currency)}
                    </Typography>
                </Stack>

                <Stack column center p="xl" br="xl" mb="md" spacing="md">
                    <Avatar userId={expense.payerId} size="sm" />
                    <Typography variant="caption" color="hint" align="center">
                        Paid by {getUserShortName(payerProfile)}
                    </Typography>
                </Stack>
            </Stack>
        );
    },
    <ExpenseSkeleton />
);
