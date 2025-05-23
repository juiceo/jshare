import { formatAmount, type BalanceObject } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';

export type BalanceListItemProps = {
    data: BalanceObject;
    highlight?: boolean;
};

export const BalanceListItem = (props: BalanceListItemProps) => {
    const { data, highlight } = props;
    return (
        <Stack row p="xl" spacing="xl" bg={highlight ? 'background.secondary' : undefined}>
            <Avatar userId={data.userId} size="lg" />
            <Stack column flex={1}>
                <Typography variant="h6">
                    <UserName userId={data.userId} variant="short" />
                </Typography>
                <Typography variant="body2" color="tertiary">
                    Paid {formatAmount(data.paid, data.currency)}
                </Typography>
                <Typography variant="body2" color="tertiary">
                    Received: {formatAmount(data.received, data.currency)}
                </Typography>
            </Stack>
            <Stack center>
                <StatusBadge amount={data.balance} currency={data.currency} />
            </Stack>
        </Stack>
    );
};
