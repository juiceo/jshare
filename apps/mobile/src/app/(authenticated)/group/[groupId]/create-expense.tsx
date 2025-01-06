import { Suspense, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { RectButton } from 'react-native-gesture-handler';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { getDefaultShares, getSharesWithUpdatedAmount, getUserShortName } from '@jshare/common';
import { Currency, zExpense, zExpenseShare, zProfile } from '@jshare/types';

import { Divider } from '~/components/atoms/Divider';
import { Menu } from '~/components/atoms/Menu';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { ExpenseSharesEditor } from '~/components/ExpenseShares/ExpenseSharesEditor';
import { Header } from '~/components/Header/Header';
import { MoneyInput } from '~/components/MoneyInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { LoadingState } from '~/components/util/LoadingState';
import { useGroupId } from '~/hooks/useGroupId';
import { useProfile } from '~/hooks/useProfile';
import { trpc } from '~/services/trpc';

const schema = z.object({
    payer: zProfile,
    expense: zExpense.pick({
        amount: true,
        currency: true,
    }),
    shares: zExpenseShare.array(),
});

type Schema = z.infer<typeof schema>;

export default function CreateExpensePage() {
    return (
        <Suspense fallback={<LoadingState message="Loading group..." />}>
            <CreateExpense />
        </Suspense>
    );
}

function CreateExpense() {
    const groupId = useGroupId();
    const [group] = trpc.groups.get.useSuspenseQuery({ id: groupId });
    const [groupMembers] = trpc.groupParticipants.list.useSuspenseQuery({ groupId });
    const { profile } = useProfile();
    const form = useForm<Schema>({
        defaultValues: {
            payer: profile,
            expense: {
                amount: 0,
                currency: Currency.EUR,
            },
            shares: getDefaultShares(groupMembers ?? []),
        },
        resolver: zodResolver(schema),
    });

    const [menu, setMenu] = useState<'currency' | 'payer' | null>(null);
    const expense = useWatch({ control: form.control, name: 'expense' });
    const shares = useWatch({ control: form.control, name: 'shares' });

    const handleSubmit = async (data: Schema) => {
        console.log('DATA', data);
    };

    return (
        <>
            <Screen disableTopInset>
                <Header title="New expense" modal />
                <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                    <Stack column px="xl">
                        <Stack center py="3xl">
                            <Controller
                                control={form.control}
                                name="expense"
                                render={({ field }) => (
                                    <MoneyInput
                                        value={field.value.amount}
                                        onChange={(value) => {
                                            field.onChange({ ...field.value, amount: value });
                                            const updatedShares = getSharesWithUpdatedAmount({
                                                expenseAmount: value,
                                                shares,
                                            });
                                            form.setValue('shares', updatedShares);
                                        }}
                                        currency={field.value.currency}
                                        autoFocus
                                    />
                                )}
                            />
                            <ErrorMessage
                                errors={form.formState.errors}
                                name={'amount.value'}
                                render={({ message }) => (
                                    <Typography variant="caption" color="error.light">
                                        {message}
                                    </Typography>
                                )}
                            />
                        </Stack>
                        <Stack column bg="background.elevation1" br="xl">
                            <Controller
                                control={form.control}
                                name="payer"
                                render={({ field }) => (
                                    <RectButton onPress={() => setMenu('payer')}>
                                        <Stack row justifyBetween alignCenter p="xl">
                                            <Typography color="hint" variant="overline">
                                                Paid by
                                            </Typography>
                                            {profile && (
                                                <Stack row center spacing="md">
                                                    <Avatar userId={field.value.userId} size="sm" />
                                                    {field.value && (
                                                        <Typography>
                                                            {getUserShortName(field.value)}
                                                        </Typography>
                                                    )}
                                                </Stack>
                                            )}
                                            <Menu
                                                title="Who paid?"
                                                value={field.value.userId}
                                                onChange={(userId, user) => field.onChange(user)}
                                                isOpen={menu === 'payer'}
                                                onClose={() => setMenu(null)}
                                                options={(groupMembers ?? []).map((member) => ({
                                                    id: member.userId,
                                                    label: getUserShortName(member.user),
                                                    data: member.user,
                                                    icon: (
                                                        <Avatar userId={member.userId} size="sm" />
                                                    ),
                                                }))}
                                            />
                                        </Stack>
                                    </RectButton>
                                )}
                            />

                            <Divider horizontal color="background.default" />
                            <Controller
                                name="expense.currency"
                                control={form.control}
                                render={({ field }) => {
                                    return (
                                        <>
                                            <RectButton onPress={() => setMenu('currency')}>
                                                <Stack row justifyBetween alignCenter p="xl">
                                                    <Typography color="hint" variant="overline">
                                                        Currency
                                                    </Typography>
                                                    <Stack column alignEnd>
                                                        <Typography>{field.value}</Typography>
                                                    </Stack>
                                                </Stack>
                                            </RectButton>
                                            <Menu
                                                title="Select currency"
                                                value={field.value}
                                                onChange={(currency) => field.onChange(currency)}
                                                isOpen={menu === 'currency'}
                                                onClose={() => setMenu(null)}
                                                options={[
                                                    {
                                                        id: Currency.EUR,
                                                        label: 'EUR',
                                                    },
                                                    {
                                                        id: Currency.USD,
                                                        label: 'USD',
                                                    },
                                                ]}
                                            />
                                        </>
                                    );
                                }}
                            />
                        </Stack>
                        <Stack p="xl" mt="2xl">
                            <Typography variant="body1">Who's participating?</Typography>
                        </Stack>
                        <Controller
                            control={form.control}
                            name="shares"
                            render={({ field }) => {
                                return (
                                    <ExpenseSharesEditor
                                        value={field.value}
                                        onChange={field.onChange}
                                        groupMembers={groupMembers ?? []}
                                        expense={expense}
                                    />
                                );
                            }}
                        />
                    </Stack>
                </Screen.Content>
                <Screen.Footer>
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={form.handleSubmit(handleSubmit)}
                    >
                        Create expense
                    </Button>
                </Screen.Footer>
            </Screen>
        </>
    );
}
