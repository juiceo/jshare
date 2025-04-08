import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalSearchParams } from 'expo-router';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { DeleteConfirmation } from '~/components/DeleteConfirmation';
import {
    ExpenseEditor,
    expenseEditorSchema,
    type ExpenseEditorSchema,
} from '~/components/ExpenseEditor';
import { ExpenseView } from '~/components/ExpenseView';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        auth: true,
    },
    ({ auth, router }) => {
        const trpcUtils = trpc.useUtils();
        const [mode, setMode] = useState<'edit' | 'view'>('view');
        const [isDeleting, setDeleting] = useState<boolean>(false);
        const { expenseId, groupId } = useLocalSearchParams<{
            expenseId: string;
            groupId: string;
        }>();
        const [expense, expenseQuery] = trpc.expenses.get.useSuspenseQuery({
            id: expenseId,
        });
        const [group] = trpc.groups.get.useSuspenseQuery({ id: groupId });
        const isOwner = expense.ownerId === auth.session.user.id;

        const updateExpense = trpc.expenses.update.useMutation();
        const archiveExpense = trpc.expenses.archive.useMutation();

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
            trpcUtils.expenses.invalidate();
            trpcUtils.balances.invalidate();
            expenseQuery.refetch();

            setMode('view');
        };

        const handleDelete = async () => {
            await archiveExpense.mutateAsync({
                expenseId: expense.id,
            });

            trpcUtils.expenses.invalidate();
            trpcUtils.balances.invalidate();

            router.back();
        };

        return (
            <Screen>
                <Screen.Header
                    title="Expense details"
                    right={
                        mode === 'edit' ? (
                            <IconButton
                                icon="Trash2"
                                variant="ghost"
                                color="error"
                                onPress={() => setDeleting(true)}
                            />
                        ) : null
                    }
                />
                <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                    {mode === 'view' && <ExpenseView expense={expense} />}
                    {mode === 'edit' && (
                        <ExpenseEditor
                            form={form}
                            groupCurrency={group.currency}
                            groupMembers={group.participants}
                            groupId={group.id}
                        />
                    )}
                </Screen.Content>
                <Screen.Footer>
                    {!expense.archived ? (
                        <Stack column spacing="md">
                            {mode === 'view' && isOwner && (
                                <>
                                    <Button color="secondary" onPress={() => setMode('edit')}>
                                        Edit expense
                                    </Button>
                                </>
                            )}
                            {mode === 'view' && !isOwner && (
                                <Stack center column spacing="md" px="xl">
                                    <Icon name="Lock" />
                                    <Typography variant="caption" color="hint" align="center">
                                        This expense can only be edited by{' '}
                                        <UserName userId={expense.ownerId} variant="short" /> or
                                        group admins
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
                    ) : (
                        <Stack center column spacing="md" px="xl">
                            <Typography variant="caption" color="hint" align="center">
                                This expense has been archived
                            </Typography>
                        </Stack>
                    )}
                </Screen.Footer>
                <DeleteConfirmation
                    isOpen={isDeleting}
                    onClose={() => setDeleting(false)}
                    onConfirm={handleDelete}
                    title="Delete expense?"
                />
            </Screen>
        );
    }
);
