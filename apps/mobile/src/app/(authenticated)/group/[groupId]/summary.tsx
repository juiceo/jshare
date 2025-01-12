import React, { useMemo } from 'react';

import {
    formatAmount,
    getTotalInCurrency,
    getTotalsByParticipant,
    getUserFullName,
} from '@jshare/common';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Screen } from '~/components/Screen';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { useExchangeRates } from '~/hooks/useExchangeRates';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/summary',
    },
    ({ params }) => {
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const [expenses] = trpc.expenses.list.useSuspenseQuery({ groupId: params.groupId });
        const [participants] = trpc.groupParticipants.list.useSuspenseQuery({
            groupId: params.groupId,
        });
        const { exchangeRates } = useExchangeRates();

        const totalsByParticipant = useMemo(() => {
            return getTotalsByParticipant({
                expenses,
                participants,
                currency: group.currency,
                exchangeRates,
            });
        }, [exchangeRates, expenses, group.currency, participants]);

        const groupTotal = useMemo(() => {
            return getTotalInCurrency({
                expenses,
                currency: group.currency,
                exchangeRates,
            });
        }, [exchangeRates, expenses, group.currency]);

        return (
            <Screen>
                <Screen.Header title="Summary" subtitle={group.name} blur />
                <Screen.Content scrollable disableTopInset disableHeaderOffset>
                    <Stack column justifyEnd alignCenter ar="1/1" p="2xl">
                        <Typography variant="overline">Group total:</Typography>
                        <Typography variant="h1">
                            {formatAmount(groupTotal, group.currency)}
                        </Typography>
                    </Stack>
                    <Stack mt="2xl" br="2xl">
                        {totalsByParticipant.map((item, index) => {
                            return (
                                <React.Fragment key={item.participant.userId}>
                                    <Stack row p="xl" spacing="xl">
                                        <Avatar userId={item.participant.userId} size="lg" />
                                        <Stack column flex={1}>
                                            <Typography variant="h6">
                                                {getUserFullName(item.participant.user)}
                                            </Typography>
                                            <Typography variant="body2" color="hint">
                                                Paid: {formatAmount(item.paid, group.currency)}
                                            </Typography>
                                            <Typography variant="body2" color="hint">
                                                Received:{' '}
                                                {formatAmount(item.received, group.currency)}
                                            </Typography>
                                        </Stack>
                                        <Stack center>
                                            <StatusBadge
                                                amount={item.balance}
                                                currency={group.currency}
                                            />
                                        </Stack>
                                    </Stack>
                                    {index !== totalsByParticipant.length - 1 && (
                                        <Divider horizontal color="background.elevation1" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
