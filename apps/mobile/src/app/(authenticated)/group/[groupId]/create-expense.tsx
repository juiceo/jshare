import { useState } from 'react';
import { Controller, FormProvider, useForm, useWatch } from 'react-hook-form';
import { RectButton } from 'react-native-gesture-handler';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
    formatAmount,
    getCurrencyDetails,
    getDefaultShares,
    getSharesWithUpdatedAmount,
    getTotalFromShares,
    getUserShortName,
} from '@jshare/common';
import { zCurrencyCode, zExpenseShare, zProfile } from '@jshare/types';

import { Divider } from '~/components/atoms/Divider';
import { Menu } from '~/components/atoms/Menu';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { CurrencyMenu } from '~/components/CurrencyMenu';
import { ExpenseSharesEditor } from '~/components/ExpenseShares/ExpenseSharesEditor';
import { MoneyInput } from '~/components/MoneyInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    payer: zProfile,
    amount: z.number().min(1, 'Please enter an amount'),
    currency: zCurrencyCode,
    description: z
        .string()
        .min(1, 'Please enter a description')
        .max(100, 'Description can be at most 100 characters'),
    shares: zExpenseShare.array(),
});

type Schema = z.infer<typeof schema>;

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/create-expense',
    },
    ({ params, router }) => {
        const { groupId } = params;
        const [groupMembers] = trpc.groupParticipants.list.useSuspenseQuery({ groupId });
        const [profile] = trpc.profiles.get.useSuspenseQuery();
        const createExpenseMutation = trpc.expenses.create.useMutation();
        const form = useForm<Schema>({
            defaultValues: {
                payer: profile,
                amount: 0,
                currency: 'USD',
                description: '',
                shares: getDefaultShares(groupMembers ?? []),
            },
            resolver: zodResolver(schema),
            mode: 'onSubmit',
        });

        const [menu, setMenu] = useState<'currency' | 'payer' | null>(null);
        const amount = useWatch({ control: form.control, name: 'amount' });
        const currency = useWatch({ control: form.control, name: 'currency' });
        const shares = useWatch({ control: form.control, name: 'shares' });

        const totalFromShares = getTotalFromShares(shares);
        const hasAmountMismatch = totalFromShares !== amount;

        const handleSubmit = async (data: Schema) => {
            await createExpenseMutation.mutateAsync({
                groupId,
                payerId: data.payer.userId,
                amount: data.amount,
                currency: data.currency,
                shares: data.shares,
                description: data.description,
            });
            router.back();
        };

        return (
            <FormProvider {...form}>
                <Screen>
                    <Screen.Header title="New expense" backButton="down" disableInset />
                    <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                        <Stack column px="xl">
                            <Stack center py="3xl">
                                <Controller
                                    control={form.control}
                                    name="amount"
                                    render={({ field }) => (
                                        <MoneyInput
                                            value={field.value}
                                            onChange={(value) => {
                                                field.onChange(value);
                                                const updatedShares = getSharesWithUpdatedAmount({
                                                    expenseAmount: value,
                                                    shares,
                                                });
                                                form.setValue('shares', updatedShares);
                                            }}
                                            currency={currency}
                                            autoFocus
                                        />
                                    )}
                                />
                                <ErrorMessage
                                    errors={form.formState.errors}
                                    name={'amount'}
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
                                    name="description"
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            label="Description"
                                            placeholder="Write a brief description"
                                            value={field.value}
                                            onChange={field.onChange}
                                            error={fieldState.error?.message}
                                        />
                                    )}
                                />
                                <Divider horizontal color="background.default" />
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
                                                        <Avatar
                                                            userId={field.value.userId}
                                                            size="sm"
                                                        />
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
                                                    onChange={(userId, user) =>
                                                        field.onChange(user)
                                                    }
                                                    isOpen={menu === 'payer'}
                                                    onClose={() => setMenu(null)}
                                                    options={(groupMembers ?? []).map((member) => ({
                                                        id: member.userId,
                                                        label: getUserShortName(member.user),
                                                        data: member.user,
                                                        icon: (
                                                            <Avatar
                                                                userId={member.userId}
                                                                size="sm"
                                                            />
                                                        ),
                                                    }))}
                                                />
                                            </Stack>
                                        </RectButton>
                                    )}
                                />
                                <Divider horizontal color="background.default" />
                                <Controller
                                    name="currency"
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
                                                            <Typography>
                                                                {
                                                                    getCurrencyDetails(field.value)
                                                                        .name
                                                                }
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </RectButton>
                                                <CurrencyMenu
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    isOpen={menu === 'currency'}
                                                    onClose={() => setMenu(null)}
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
                                            expense={{
                                                amount,
                                                currency,
                                            }}
                                        />
                                    );
                                }}
                            />
                        </Stack>
                    </Screen.Content>
                    <Screen.Footer>
                        <Stack column>
                            {hasAmountMismatch && (
                                <Typography
                                    variant="caption"
                                    color="error.light"
                                    align="center"
                                    p="md"
                                >
                                    Please make sure the total sum of shares (
                                    {formatAmount(totalFromShares, currency)}) matches the amount (
                                    {formatAmount(amount, currency)})
                                </Typography>
                            )}

                            <Button
                                color="primary"
                                variant="contained"
                                disabled={hasAmountMismatch}
                                onPress={form.handleSubmit(handleSubmit)}
                                loading={form.formState.isSubmitting}
                            >
                                Create expense
                            </Button>
                        </Stack>
                    </Screen.Footer>
                </Screen>
            </FormProvider>
        );
    }
);
