import { RectButton } from 'react-native-gesture-handler';

import { formatAmount } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';

export type ExpenseSharesEditorItemProps = {
    userId: string;
    share: Pick<DB.ExpenseShare, 'locked' | 'amount'> | undefined;
    currency: string;
    onPress: () => void;
    onLongPress: () => void;
};

export const ExpenseSharesEditorItem = (props: ExpenseSharesEditorItemProps) => {
    const { userId, share, currency, onPress, onLongPress } = props;

    return (
        <RectButton onPress={onPress} onLongPress={onLongPress}>
            <Stack
                row
                justifyBetween
                alignCenter
                p="xl"
                spacing="xl"
                width="100%"
                style={{ opacity: share ? 1 : 0.5 }}
            >
                <Stack row alignCenter spacing="md" flex={1}>
                    <Avatar userId={userId} size="md" />
                    <Typography ellipsizeMode="tail" numberOfLines={1} flex={1}>
                        <UserName userId={userId} variant="short" />
                    </Typography>
                </Stack>
                <Stack row alignCenter spacing="md" flex={0}>
                    <Typography variant="body1">
                        {!share ? '-' : formatAmount(share.amount ?? 0, currency)}
                    </Typography>
                    {!share ? (
                        <Icon
                            name="Circle"
                            size={32}
                            color={(theme) => theme.palette.text.disabled}
                        />
                    ) : share.locked ? (
                        <Icon
                            name="Lock"
                            size={32}
                            color={(theme) => theme.palette.primary.light}
                        />
                    ) : (
                        <Icon
                            name="CircleCheck"
                            size={32}
                            color={(theme) => theme.palette.primary.light}
                        />
                    )}
                </Stack>
            </Stack>
        </RectButton>
    );
};
