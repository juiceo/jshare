import React from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { getUserShortName } from '@jshare/common';
import { zCurrency } from '@jshare/types';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { ExpenseShareList } from '~/components/ExpenseShares/ExpenseShareList';
import { zExpenseSharesByUser } from '~/components/ExpenseShares/types';
import { Header } from '~/components/Header/Header';
import { MoneyInput } from '~/components/MoneyInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useGroupMembers } from '~/hooks/useGroupMembers';
import { useProfile } from '~/hooks/useProfile';
import { useCurrentGroup } from '~/wrappers/GroupProvider';

const schema = z.object({
    amount: z.object({
        value: z.number().min(1),
        currency: zCurrency,
    }),
    shares: zExpenseSharesByUser,
});

type Schema = z.infer<typeof schema>;

export default function CreateExpense() {
    const { group } = useCurrentGroup();
    const { profile } = useProfile();
    const { data: groupMembers } = useGroupMembers(group.id);
    const form = useForm<Schema>({
        defaultValues: {
            amount: {
                value: 0,
                currency: 'EUR',
            },
        },
        resolver: zodResolver(schema),
    });

    const expenseAmount = useWatch({ control: form.control, name: 'amount.value' });
    const expenseCurrency = useWatch({ control: form.control, name: 'amount.currency' });

    return (
        <Screen disableTopInset>
            <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                <Header title="New expense" modal />
                <Stack column px="xl">
                    <Stack center py="3xl">
                        <Controller
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <MoneyInput
                                    value={field.value.value}
                                    onChange={(value) => field.onChange({ ...field.value, value })}
                                    currency={field.value.currency}
                                    autoFocus
                                />
                            )}
                        />
                    </Stack>
                    <Stack column bg="background.elevation1" br="xl">
                        <Stack row justifyBetween alignCenter p="xl">
                            <Typography color="hint" variant="overline">
                                Paid by
                            </Typography>
                            {profile && (
                                <Stack row center spacing="md">
                                    <Avatar userId={profile.userId} size="sm" />
                                    <Typography>{getUserShortName(profile)}</Typography>
                                </Stack>
                            )}
                        </Stack>
                        <Divider horizontal color="background.default" />
                        <Stack row justifyBetween alignCenter p="xl">
                            <Typography color="hint" variant="overline">
                                Currency
                            </Typography>
                            <Stack column alignEnd>
                                <Typography>EUR</Typography>
                                <Typography variant="caption" color="disabled">
                                    1 CHF = 0.89 EUR
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack p="xl" mt="2xl">
                        <Typography variant="body1">Who's participating?</Typography>
                    </Stack>
                    <Controller
                        control={form.control}
                        name="shares"
                        render={({ field }) => {
                            return (
                                <ExpenseShareList
                                    value={field.value}
                                    onChange={field.onChange}
                                    groupMembers={groupMembers ?? []}
                                    expenseAmount={expenseAmount}
                                    expenseCurrency={expenseCurrency}
                                />
                            );
                        }}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Button color="primary" variant="contained" onPress={() => console.log('hi')}>
                    Create expense
                </Button>
            </Screen.Footer>
        </Screen>
    );
}
