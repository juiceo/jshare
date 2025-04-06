import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formatAmount, getDefaultShares, getTotalFromShares } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import {
    ExpenseEditor,
    expenseEditorSchema,
    ExpenseEditorSchema,
} from '~/components/ExpenseEditor';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/create-expense',
        auth: true,
    },
    ({ params, router, auth }) => {
        const { groupId } = params;
        const [group] = trpc.groups.get.useSuspenseQuery({ id: groupId });
        const [groupMembers] = trpc.groupParticipants.list.useSuspenseQuery({ groupId });
        const createExpenseMutation = trpc.expenses.create.useMutation();
        const form = useForm<ExpenseEditorSchema>({
            defaultValues: {
                payerId: auth.session.user.id,
                amount: 0,
                currency: group.currency,
                description: '',
                shares: getDefaultShares(groupMembers ?? []),
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
            await createExpenseMutation.mutateAsync({
                groupId,
                ...data,
            });
            router.back();
        };

        return (
            <FormProvider {...form}>
                <Screen>
                    <Screen.Header title="New expense" backButton="down" disableInset />
                    <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                        <ExpenseEditor
                            form={form}
                            groupCurrency={group.currency}
                            groupMembers={groupMembers}
                            groupId={group.id}
                        />
                    </Screen.Content>
                    <Screen.Footer padding="xl">
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
