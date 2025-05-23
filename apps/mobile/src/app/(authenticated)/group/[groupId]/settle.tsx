import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { isEqual } from 'lodash';
import { observer } from 'mobx-react-lite';

import {
    formatAmount,
    getBalanceByParticipant,
    getPaymentsFromBalances,
    type PaymentObject,
} from '@jshare/common';

import { Checkbox } from '~/components/atoms/Checkbox';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

const GroupSettleScreen = screen(
    observer(() => {
        const user = SessionStore.user;
        const router = useRouter();
        const { group, groupId } = useGroupContext();
        const [checked, setChecked] = useState<PaymentObject[]>([]);

        const expenses = Store.expenses.findMany({
            groupId,
        });

        const payments = Store.payments.findMany({
            groupId,
        });

        const balances = useMemo(() => {
            return getBalanceByParticipant({
                expenses: expenses.map((e) => e.data),
                payments: payments.map((p) => p.data),
                participants: group.data.participants,
                currency: group.data.currency,
            });
        }, [expenses, payments, group.data.participants, group.data.currency]);

        const paymentsToSettle = useMemo(() => {
            return getPaymentsFromBalances(balances);
        }, [balances]);

        const ownPayments = useMemo(() => {
            return paymentsToSettle.filter(
                (payment) => payment.fromUserId === user.id || payment.toUserId === user.id
            );
        }, [paymentsToSettle, user.id]);

        const balance = balances.find((b) => b.userId === user.id)?.balance ?? 0;

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

        const handleSubmit = async () => {
            for (const payment of checked) {
                Store.payments.create({
                    groupId,
                    payerId: payment.fromUserId,
                    recipientId: payment.toUserId,
                    amount: payment.amount,
                    currency: payment.currency,
                });
            }

            router.back();
        };

        return (
            <Screen>
                <Screen.Header title="Settle up" subtitle={group.data.name} blur />
                <Screen.Content scrollable disableTopInset>
                    <Stack column center alignCenter p="2xl" ar="16/9">
                        {balance < 0 && (
                            <Stack column center>
                                <Typography variant="h4" align="center">
                                    You need to pay
                                </Typography>
                                <Typography variant="h1" align="center">
                                    {formatAmount(-balance, group.data.currency)}
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
                                    {formatAmount(balance, group.data.currency)}
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
                                    Your balance is {formatAmount(0, group.data.currency)}
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                    {balance !== 0 && (
                        <Stack p="xl">
                            <Typography variant="h5" align="center">
                                {balance < 0 ? 'You should pay:' : 'You should receive:'}
                            </Typography>
                        </Stack>
                    )}
                    <Stack column p="xl" spacing="md">
                        {ownPayments.map((payment) => (
                            <Stack
                                key={`${payment.fromUserId}-${payment.toUserId}`}
                                row
                                alignCenter
                                justifyBetween
                                spacing="md"
                                bg="background.secondary"
                                br="xl"
                                p="xl"
                            >
                                <Stack column>
                                    <Typography variant="h3">
                                        {formatAmount(payment.amount, payment.currency)}
                                    </Typography>
                                    {payment.fromUserId === user.id ? (
                                        <Stack row alignCenter spacing="md">
                                            <Avatar userId={payment.toUserId} size="sm" />
                                            <Typography variant="h6">
                                                <UserName
                                                    prefix="To"
                                                    userId={payment.toUserId}
                                                    variant={'short'}
                                                />
                                            </Typography>
                                        </Stack>
                                    ) : (
                                        <Stack row alignCenter spacing="md">
                                            <Avatar userId={payment.fromUserId} size="sm" />
                                            <Typography variant="h6">
                                                <UserName
                                                    prefix="From"
                                                    userId={payment.fromUserId}
                                                    variant={'short'}
                                                />
                                            </Typography>
                                        </Stack>
                                    )}
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
                    {ownPayments.length > 0 ? (
                        <Screen.Footer>
                            <Button
                                color="primary"
                                disabled={checked.length === 0}
                                onPress={handleSubmit}
                            >{`Mark ${checked.length}/${ownPayments.length} as ${balance > 0 ? 'received' : 'paid'}`}</Button>
                        </Screen.Footer>
                    ) : (
                        <Screen.Footer>
                            <Button color="secondary" onPress={router.back}>
                                Go back
                            </Button>
                        </Screen.Footer>
                    )}
                </>
            </Screen>
        );
    })
);

export default GroupSettleScreen;
