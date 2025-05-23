import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react-lite';

import { formatAmount, plural, sumInCurrency } from '@jshare/common';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { useUserBalance } from '~/hooks/useUserBalance';
import { Store, type Docs } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';

export type GroupCardProps = {
    group: Docs.Group;
};

export const GroupCard = observer((props: GroupCardProps) => {
    const { group } = props;

    const user = SessionStore.user;

    const expenses = Store.expenses.findMany({
        groupId: group.id,
    });

    const payments = Store.payments.findMany({
        groupId: group.id,
    });

    const groupTotal = useMemo(() => {
        return sumInCurrency(
            expenses.map((e) => e.data),
            group.data.currency
        );
    }, [expenses, group.data.currency]);

    const balance = useUserBalance({
        userId: user.id,
        currency: group.data.currency,
        expenses,
        payments,
    });

    return (
        <Stack br="xl" bg="background.secondary" column alignStretch style={{ overflow: 'hidden' }}>
            <Stack style={{ position: 'relative' }}>
                <Image
                    height={140}
                    width={Dimensions.get('window').width}
                    image={group?.data.coverImage}
                    fit="cover"
                    quality={80}
                />
                <LinearGradient
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingBottom: 50 }}
                >
                    <Stack p="xl" row justifyBetween alignCenter>
                        <Typography variant="caption">
                            {dayjs(group.data.lastActivity).fromNow()}
                        </Typography>
                        <StatusBadge
                            amount={balance.balance}
                            currency={group.data.currency}
                            prefix="You:"
                        />
                    </Stack>
                </LinearGradient>
            </Stack>
            <Stack column p="xl" br="2xl" style={{ position: 'relative' }}>
                <Typography variant="h4">{group.data.name}</Typography>
                <Typography variant="caption" color="secondary">
                    {`${formatAmount(groupTotal ?? 0, group.data.currency)} | ${plural({
                        plural: 'members',
                        singular: 'member',
                        count: group.data.participants?.length || 1,
                    })}`}
                </Typography>
            </Stack>
        </Stack>
    );
});
