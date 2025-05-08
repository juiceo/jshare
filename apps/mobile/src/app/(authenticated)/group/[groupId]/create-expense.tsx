import { useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';

import { formatAmount, getDefaultShares, getTotalFromShares } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import {
    ExpenseEditor,
    expenseEditorSchema,
    ExpenseEditorSchema,
} from '~/components/ExpenseEditor';
import { IconButton } from '~/components/IconButton';
import { InfoSheet } from '~/components/InfoSheet';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(() => {
    const user = useCurrentUser();
    const router = useRouter();
    const { group, groupId } = useGroupContext();
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const form = useForm<ExpenseEditorSchema>({
        defaultValues: {
            payerId: user.id,
            amount: 0,
            currency: group.data.currency,
            description: '',
            shares: getDefaultShares(group.data.participants ?? []),
        },
        resolver: zodResolver(expenseEditorSchema),
        mode: 'onSubmit',
    });

    const amount = useWatch({ control: form.control, name: 'amount' });
    const currency = useWatch({ control: form.control, name: 'currency' });
    const shares = useWatch({ control: form.control, name: 'shares' });

    const totalFromShares = getTotalFromShares(shares);
    const hasAmountMismatch = totalFromShares !== amount;

    const handleSubmit = async (data: ExpenseEditorSchema) => {
        Store.expenses.create({
            groupId,
            ...data,
        });
        router.back();
    };

    return (
        <>
            <FormProvider {...form}>
                <Screen>
                    <Screen.Header
                        title="New expense"
                        backButton="down"
                        right={
                            <IconButton
                                icon="CircleHelp"
                                variant="ghost"
                                onPress={() => setShowInfo(true)}
                            />
                        }
                    />
                    <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                        <ExpenseEditor
                            form={form}
                            groupCurrency={group.data.currency}
                            groupMembers={group.data.participants}
                            groupId={group.id}
                        />
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
            <InfoSheet
                isOpen={showInfo}
                onClose={() => setShowInfo(false)}
                title="Expenses"
                description="Expenses are a way to split a bill between the members of a group. You can create an expense by selecting the payer and the amount they've paid, and then defining how much each user owes the payer for the expense."
            />
        </>
    );
});
