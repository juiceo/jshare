import React from 'react';

import { formatAmount, getPaymentsFromBalances } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/settle',
    },
    ({ params }) => {
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const [balances] = trpc.balances.getByParticipantInGroup.useSuspenseQuery({
            groupId: params.groupId,
        });

        const payments = getPaymentsFromBalances(balances);

        console.log('PAYMENTS', payments);

        return (
            <Screen>
                <Screen.Header title={group.name} subtitle="Settle up" blur />
                <Screen.Content scrollable disableHeaderOffset>
                    <Stack column center alignCenter ar="1/1" p="2xl">
                        <Typography variant="overline">Settle up</Typography>
                    </Stack>
                    <Stack column>
                        {/* {payments.map((payment) => (
                            <Stack key={payment.fromUserId} p="xl">
                                <Typography variant="h6">
                                    {payment.fromUserId} to {payment.toUserId}
                                </Typography>
                                <Typography variant="body1">
                                    {formatAmount(payment.amount, payment.currency)}
                                </Typography>
                            </Stack>
                        ))} */}
                    </Stack>
                </Screen.Content>
                <Screen.Footer>
                    <Button color="primary">Mark 2/2 as paid</Button>
                </Screen.Footer>
            </Screen>
        );
    }
);
