import { Controller, useWatch, type UseFormReturn } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { z } from 'zod';

import {
    formatAmount,
    getCurrencyDetails,
    recalculateShares,
    zPartialExpenseShare,
} from '@jshare/common';
import { zDB, type DB } from '@jshare/db';

import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CurrencySelect } from '~/components/CurrencySelect';
import { ExpenseSharesEditor } from '~/components/ExpenseEditor/ExpenseSharesEditor';
import { MoneyInput } from '~/components/MoneyInput';
import { Typography } from '~/components/Typography';
import { UserSelect } from '~/components/UserSelect';
import { useCurrencyConversion } from '~/hooks/useExchangeRates';

export const expenseEditorSchema = z.object({
    payerId: z.string(),
    amount: z.number().min(1, 'Please enter an amount'),
    currency: zDB.enums.CurrencyCodeSchema,
    description: z
        .string()
        .min(1, 'Please enter a description')
        .max(100, 'Description can be at most 100 characters'),
    shares: zPartialExpenseShare.array(),
});

export type ExpenseEditorSchema = z.infer<typeof expenseEditorSchema>;

export type ExpenseEditorProps = {
    form: UseFormReturn<ExpenseEditorSchema>;
    groupCurrency: DB.CurrencyCode;
    groupMembers: DB.GroupParticipant[];
    groupId: string;
};

export const ExpenseEditor = (props: ExpenseEditorProps) => {
    const { form, groupCurrency, groupMembers, groupId } = props;

    const amount = useWatch({ control: form.control, name: 'amount' });
    const currency = useWatch({ control: form.control, name: 'currency' });
    const shares = useWatch({ control: form.control, name: 'shares' });

    const { convert } = useCurrencyConversion();

    return (
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
                                const updatedShares = recalculateShares({
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
                {currency !== groupCurrency && (
                    <Typography variant="caption" color="hint">
                        {`= ${formatAmount(
                            convert({
                                amount,
                                from: currency,
                                to: groupCurrency,
                            }),
                            groupCurrency
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
                    name="payerId"
                    render={({ field, fieldState: { error } }) => (
                        <UserSelect
                            label="Paid by"
                            placeholder="Select person"
                            userIds={groupMembers.map((member) => member.userId)}
                            value={field.value}
                            onChange={(userId, profile) => field.onChange(userId)}
                            error={error?.message}
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
                            <CurrencySelect
                                label="Currency"
                                placeholder="Select currency"
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
                            groupId={groupId}
                        />
                    );
                }}
            />
        </Stack>
    );
};
