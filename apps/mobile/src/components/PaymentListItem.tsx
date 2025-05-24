import dayjs from 'dayjs';

import { formatAmount } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';

export type PaymentListItemProps = {
    data: DB.Payment;
};

export const PaymentListItem = (props: PaymentListItemProps) => {
    const { data } = props;
    return (
        <Stack row p="xl" spacing="xl">
            <Stack column flex={1}>
                <Stack row alignCenter spacing="md" mb="md">
                    <Avatar userId={data.payerId} size="sm" />
                    <Typography variant="h6">
                        <UserName prefix="From" userId={data.payerId} variant="short" />
                        <UserName prefix=" to" userId={data.recipientId} variant="short" />
                    </Typography>
                </Stack>
                <Typography variant="caption" color="tertiary">
                    {dayjs(data.createdAt).format('MMM D, YYYY HH:mm')}
                </Typography>
            </Stack>
            <Stack column alignEnd justifyCenter>
                <Typography variant="h6">{formatAmount(data.amount, data.currency)}</Typography>
                {data.conversion && (
                    <Typography variant="h6" color="tertiary">
                        = {formatAmount(data.conversion.amount, data.conversion.currency)}
                    </Typography>
                )}
            </Stack>
        </Stack>
    );
};
