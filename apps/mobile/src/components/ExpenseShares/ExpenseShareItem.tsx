import { RectButton } from 'react-native-gesture-handler';

import { formatAmount, getUserShortName, type CurrencyCode } from '@jshare/common';
import type { DB } from '@jshare/types';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ExpenseShareItemProps = {
    user: DB.Profile;
    amount: number;
    currency: CurrencyCode;
    status: 'active' | 'inactive' | 'locked';
    onPress: () => void;
    onLongPress: () => void;
};

export const ExpenseShareItem = (props: ExpenseShareItemProps) => {
    const { user, amount, currency, status, onPress, onLongPress } = props;

    return (
        <RectButton onPress={onPress} onLongPress={onLongPress}>
            <Stack
                row
                justifyBetween
                alignCenter
                p="xl"
                spacing="xl"
                width="100%"
                style={{ opacity: status === 'inactive' ? 0.5 : 1 }}
            >
                <Stack row alignCenter spacing="md" flex={1}>
                    <Avatar userId={user.userId} size="sm" />
                    <Typography ellipsizeMode="tail" numberOfLines={1} flex={1}>
                        {getUserShortName(user)}
                    </Typography>
                </Stack>
                <Stack row alignCenter spacing="md" flex={0}>
                    <Typography variant="body1">
                        {status === 'inactive' ? '-' : formatAmount(amount, currency)}
                    </Typography>
                    {status === 'inactive' && (
                        <Icon
                            name="Circle"
                            size={32}
                            color={(theme) => theme.palette.text.disabled}
                        />
                    )}
                    {status === 'active' && (
                        <Icon
                            name="CircleCheck"
                            size={32}
                            color={(theme) => theme.palette.primary.light}
                        />
                    )}
                    {status === 'locked' && (
                        <Icon
                            name="Lock"
                            size={32}
                            color={(theme) => theme.palette.primary.light}
                        />
                    )}
                </Stack>
            </Stack>
        </RectButton>
    );
};
