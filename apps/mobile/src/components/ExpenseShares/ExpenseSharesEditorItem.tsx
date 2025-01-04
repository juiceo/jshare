import { RectButton } from 'react-native-gesture-handler';

import { formatAmount, getUserShortName } from '@jshare/common';
import type { DB, LocalExpenseShare } from '@jshare/types';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ExpenseSharesEditorItemProps = {
    user: DB.Profile;
    share: LocalExpenseShare;
    currency: DB.Currency;
    onPress: () => void;
    onLongPress: () => void;
};

export const ExpenseSharesEditorItem = (props: ExpenseSharesEditorItemProps) => {
    const { user, share, currency, onPress, onLongPress } = props;

    return (
        <RectButton onPress={onPress} onLongPress={onLongPress}>
            <Stack
                row
                justifyBetween
                alignCenter
                p="xl"
                spacing="xl"
                width="100%"
                style={{ opacity: share.enabled ? 1 : 0.5 }}
            >
                <Stack row alignCenter spacing="md" flex={1}>
                    <Avatar userId={user.userId} size="sm" />
                    <Typography ellipsizeMode="tail" numberOfLines={1} flex={1}>
                        {getUserShortName(user)}
                    </Typography>
                </Stack>
                <Stack row alignCenter spacing="md" flex={0}>
                    <Typography variant="body1">
                        {!share.enabled ? '-' : formatAmount(share.amount ?? 0, currency)}
                    </Typography>
                    {!share.enabled && (
                        <Icon
                            name="Circle"
                            size={32}
                            color={(theme) => theme.palette.text.disabled}
                        />
                    )}
                    {share.enabled && !share.locked && (
                        <Icon
                            name="CircleCheck"
                            size={32}
                            color={(theme) => theme.palette.primary.light}
                        />
                    )}
                    {share.enabled && share.locked && (
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
