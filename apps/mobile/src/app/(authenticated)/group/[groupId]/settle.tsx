import React, { useMemo, useState } from 'react';
import { isEqual } from 'lodash';

import { formatAmount, getPaymentsFromBalances, type PaymentObject } from '@jshare/common';

import { Checkbox } from '~/components/atoms/Checkbox';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/settle',
        auth: true,
    },
    ({ params, auth }) => {
        const [checked, setChecked] = useState<PaymentObject[]>([]);
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const [balances] = trpc.balances.getByParticipantInGroup.useSuspenseQuery({
            groupId: params.groupId,
        });

        const payments = useMemo(() => {
            return getPaymentsFromBalances(balances);
        }, [balances]);

        const ownPayments = useMemo(() => {
            return payments.filter(
                (payment) =>
                    payment.fromUserId === auth.session.user.id ||
                    payment.toUserId === auth.session.user.id
            );
        }, [auth.session.user.id, payments]);

        const balance = balances.find((b) => b.userId === auth.session.user.id)?.balance ?? 0;
        const checkedCount = checked.length;

        const isPaymentChecked = (payment: PaymentObject) => {
            return checked.some((p) => isEqual(p, payment));
        };

        const handleToggle = (payment: PaymentObject) => {
            if (isPaymentChecked(payment)) {
                setChecked(checked.filter((p) => !isEqual(p, payment)));
            } else {
                setChecked([...checked, payment]);
            }
        };

        return (
            <Screen>
                <Screen.Header title="Settle up" subtitle={group.name} blur />
                <Screen.Content scrollable disableTopInset>
                    <Stack column center alignCenter p="2xl" ar="16/9">
                        {balance < 0 && (
                            <Stack column center>
                                <Typography variant="h4" align="center">
                                    You need to pay
                                </Typography>
                                <Typography variant="h1" align="center">
                                    {formatAmount(-balance, group.currency)}
                                </Typography>
                                <Typography variant="body1" align="center">
                                    to settle your balance
                                </Typography>
                            </Stack>
                        )}
                        {balance > 0 && (
                            <Stack column center>
                                <Typography variant="h4" align="center">
                                    You will receive
                                </Typography>
                                <Typography variant="h1" align="center">
                                    {formatAmount(balance, group.currency)}
                                </Typography>
                                <Typography variant="body1" align="center">
                                    to settle your balance
                                </Typography>
                            </Stack>
                        )}
                        {balance === 0 && (
                            <Stack column center>
                                <Typography variant="h1" align="center">
                                    All settled!
                                </Typography>
                                <Typography variant="body1" align="center">
                                    Your balance is {formatAmount(0, group.currency)}
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                    <Stack p="xl">
                        <Typography variant="h5" align="center">
                            You should pay:
                        </Typography>
                    </Stack>
                    <Stack column p="xl">
                        {ownPayments.map((payment) => (
                            <Stack
                                key={payment.toUserId}
                                row
                                alignCenter
                                justifyBetween
                                spacing="md"
                                bg="background.elevation1"
                                br="xl"
                                p="xl"
                            >
                                <Stack column>
                                    <Typography variant="h3">
                                        {formatAmount(payment.amount, payment.currency)}
                                    </Typography>
                                    <Stack row alignCenter spacing="md">
                                        <Avatar userId={payment.toUserId} size="sm" />
                                        <Typography variant="h6">
                                            {'To '}
                                            <UserName userId={payment.toUserId} variant={'short'} />
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack column center>
                                    <Checkbox
                                        checked={isPaymentChecked(payment)}
                                        onChange={() => handleToggle(payment)}
                                    />
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Screen.Content>
                <>
                    {ownPayments.length > 0 && (
                        <Screen.Footer>
                            <Button
                                color="primary"
                                disabled={checkedCount === 0}
                            >{`Mark ${checkedCount}/${ownPayments.length} as ${balance > 0 ? 'received' : 'paid'}`}</Button>
                        </Screen.Footer>
                    )}
                </>
            </Screen>
        );
    }
);
