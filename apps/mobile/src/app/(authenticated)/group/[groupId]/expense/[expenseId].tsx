import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import {
    ExpenseEditor,
    expenseEditorSchema,
    type ExpenseEditorSchema,
} from '~/components/ExpenseEditor';
import { ExpenseView } from '~/components/ExpenseView';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/expense/[expenseId]',
        auth: true,
    },
    ({ params, auth }) => {
        const trpcUtils = trpc.useUtils();
        const [mode, setMode] = useState<'edit' | 'view'>('view');
        const [expense, expenseQuery] = trpc.expenses.get.useSuspenseQuery({
            id: params.expenseId,
        });
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const isOwner = expense.ownerId === auth.session.user.id;

        const updateExpense = trpc.expenses.update.useMutation();

        const form = useForm<ExpenseEditorSchema>({
            resolver: zodResolver(expenseEditorSchema),
            defaultValues: {
                payerId: expense.payerId,
                currency: expense.currency,
                amount: expense.amount,
                description: expense.description ?? '',
                shares: expense.shares,
            },
        });

        const handleSubmit = async (data: ExpenseEditorSchema) => {
            const updatedExpense = await updateExpense.mutateAsync({
                expenseId: expense.id,
                groupId: expense.groupId,
                ...data,
            });

            trpcUtils.expenses.get.setData({ id: expense.id }, () => {
                return updatedExpense;
            });
            expenseQuery.refetch();

            setMode('view');
        };

        return (
            <Screen>
                <Screen.Header title="Expense details" />
                <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                    {mode === 'view' && <ExpenseView expense={expense} />}
                    {mode === 'edit' && (
                        <ExpenseEditor
                            form={form}
                            groupCurrency={group.currency}
                            groupMembers={group.participants}
                        />
                    )}
                </Screen.Content>
                <Screen.Footer>
                    <Stack column spacing="md">
                        {mode === 'view' && isOwner && (
                            <Button color="secondary" onPress={() => setMode('edit')}>
                                Edit expense
                            </Button>
                        )}
                        {mode === 'view' && !isOwner && (
                            <Stack center column spacing="md" px="xl">
                                <Icon name="Lock" />
                                <Typography variant="caption" color="hint" align="center">
                                    This expense can only be edited by{' '}
                                    <UserName userId={expense.ownerId} variant="short" /> or group
                                    admins
                                </Typography>
                            </Stack>
                        )}
                        {mode === 'edit' && (
                            <>
                                <Button
                                    color="secondary"
                                    variant="ghost"
                                    onPress={() => setMode('view')}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={form.handleSubmit(handleSubmit)}
                                    loading={updateExpense.isPending}
                                >
                                    Save changes
                                </Button>
                            </>
                        )}
                    </Stack>
                </Screen.Footer>
            </Screen>
        );
    }
);
