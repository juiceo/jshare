import { BorderlessButton } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import { useRouter } from 'expo-router';

import { formatAmount } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';

export type ExpenseListItemProps = {
    data: DB.Expense<{ shares: true }>;
    userId: string;
};

export const ExpenseListItem = (props: ExpenseListItemProps) => {
    const router = useRouter();
    const { data, userId } = props;

    const ownShare = data.shares.find((s) => s.userId === userId);
    return (
        <BorderlessButton
            activeOpacity={0.8}
            onPress={() =>
                router.push({
                    pathname: '/(authenticated)/group/[groupId]/expense/[expenseId]',
                    params: { groupId: data.groupId, expenseId: data.id },
                })
            }
        >
            <Stack row p="xl" spacing="xl">
                <Stack column flex={1}>
                    <Typography variant="h6">{data.description ?? 'Untitled expense'}</Typography>
                    <Typography variant="caption" color="hint">
                        <UserName prefix="Paid by" userId={data.payerId} variant="short" />
                    </Typography>
                    <Typography variant="caption" color="hint">
                        {dayjs(data.createdAt).format('MMM D, YYYY HH:mm')}
                    </Typography>
                    <Stack row spacing="md" alignCenter mt="md">
                        <Typography variant="body2" color="secondary">
                            Created by
                        </Typography>
                        <Avatar userId={data.ownerId} size="sm" />
                        <Typography variant="body2" color="secondary">
                            <UserName userId={data.ownerId} variant="short" />
                        </Typography>
                    </Stack>
                </Stack>
                <Stack column alignEnd justifyCenter>
                    <Typography variant="subtitle1">
                        {formatAmount(data.amount, data.currency)}
                    </Typography>
                    {ownShare && (
                        <Typography variant="subtitle2" color="hint">
                            You: {formatAmount(ownShare.amount, ownShare.currency)}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </BorderlessButton>
    );
};
