import { useMemo } from 'react';
import { Controller, FormProvider, useForm, useWatch } from 'react-hook-form';
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
    zPartialExpenseShare,
} from '@jshare/common';
import { zDB, type DB } from '@jshare/db';

import type { MenuOption } from '~/components/atoms/Menu';
import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { ExpenseSharesEditor } from '~/components/ExpenseShares/ExpenseSharesEditor';
import { MoneyInput } from '~/components/MoneyInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useCurrencyConversion } from '~/hooks/useExchangeRates';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    payer: zDB.models.ProfileScalarSchema.passthrough(),
    amount: z.number().min(1, 'Please enter an amount'),
    currency: zDB.enums.CurrencyCodeSchema,
    description: z
        .string()
        .min(1, 'Please enter a description')
        .max(100, 'Description can be at most 100 characters'),
    shares: zPartialExpenseShare.array(),
});

type Schema = z.infer<typeof schema>;

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/create-expense',
    },
    ({ params, router }) => {
        const { groupId } = params;
        const [group] = trpc.groups.get.useSuspenseQuery({ id: groupId });
        const [groupMembers] = trpc.groupParticipants.list.useSuspenseQuery({ groupId });
        const [profile] = trpc.profiles.me.useSuspenseQuery();
        const { convert } = useCurrencyConversion();
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

        const userOptions = useMemo((): MenuOption<string, DB.Profile>[] => {
            return groupMembers?.map((member) => ({
                id: member.userId,
                label: getUserShortName(member.user),
                data: member.user,
                icon: <Avatar userId={member.userId} size="sm" />,
            }));
        }, [groupMembers]);

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
                                            autoFocus
                                        />
                                    )}
                                />
                                <Typography variant="caption">
                                    {getCurrencyDetails(currency).name_plural}
                                </Typography>
                                {currency !== group.currency && (
                                    <Typography variant="caption" color="hint">
                                        {`= ${formatAmount(
                                            convert({
                                                amount,
                                                from: currency,
                                                to: group.currency,
                                            }),
                                            group.currency
                                        )}`}
                                    </Typography>
                                )}

                                <Typography variant="caption"></Typography>
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
                            <Stack column spacing="md" br="xl">
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
                                <Controller
                                    control={form.control}
                                    name="payer"
                                    render={({ field, fieldState: { error } }) => (
                                        <Select
                                            label="Paid by"
                                            placeholder="Select person"
                                            options={userOptions}
                                            value={field.value.userId}
                                            onChange={(userId, profile) => field.onChange(profile)}
                                            error={error?.message}
                                            renderValue={(userId, profile) => {
                                                return (
                                                    <Stack row alignCenter spacing="md">
                                                        <Avatar userId={userId} size="sm" />
                                                        <Typography variant="body1" color="primary">
                                                            {getUserShortName(profile)}
                                                        </Typography>
                                                    </Stack>
                                                );
                                            }}
                                            MenuProps={{
                                                title: 'Who paid?',
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    name="currency"
                                    control={form.control}
                                    render={({ field, fieldState: { error } }) => {
                                        return (
                                            <Select
                                                label="Currency"
                                                placeholder="Select currency"
                                                options={CURRENCY_OPTIONS}
                                                value={field.value}
                                                onChange={field.onChange}
                                                error={error?.message}
                                                MenuProps={{
                                                    title: 'Select currency',
                                                }}
                                            />
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
