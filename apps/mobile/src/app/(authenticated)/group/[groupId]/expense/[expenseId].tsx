import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';

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
import { Store } from '~/lib/store/collections';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(
    observer(() => {
        const user = useCurrentUser();
        const router = useRouter();
        const [mode, setMode] = useState<'edit' | 'view'>('view');
        const [isDeleting, setDeleting] = useState<boolean>(false);
        const { group, isAdmin } = useGroupContext();
        const { expenseId } = useLocalSearchParams<{
            expenseId: string;
        }>();

        const expense = Store.expenses.findById(expenseId);

        const isOwner = expense?.data.ownerId === user.id;

        const form = useForm<ExpenseEditorSchema>({
            resolver: zodResolver(expenseEditorSchema),
            defaultValues: {
                payerId: expense?.data.payerId,
                currency: expense?.data.currency,
                amount: expense?.data.amount,
                description: expense?.data.description ?? '',
                shares: expense?.data.shares,
            },
        });

        const handleSubmit = async (data: ExpenseEditorSchema) => {
            if (!expense) return;
            console.log('handleSubmit', data);
            expense.update(data);

            setMode('view');
        };

        const handleDelete = async () => {
            if (!expense) return;
            Store.expenses.delete(expense.id);

            router.back();
        };

        if (!expense) return null;

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
                            groupCurrency={group.data.currency}
                            groupMembers={group.data.participants}
                            groupId={group.id}
                        />
                    )}
                </Screen.Content>
                <Screen.Footer>
                    {!expense.data.archived ? (
                        <Stack column spacing="md">
                            {mode === 'view' && isOwner && (
                                <>
                                    <Button color="secondary" onPress={() => setMode('edit')}>
                                        Edit expense
                                    </Button>
                                </>
                            )}
                            {mode === 'view' && !isOwner && !isAdmin && (
                                <Stack center column spacing="md" px="xl">
                                    <Icon name="Lock" />
                                    <Typography variant="caption" color="hint" align="center">
                                        This expense can only be edited by{' '}
                                        <UserName userId={expense.data.ownerId} variant="short" />{' '}
                                        or group admins
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
    })
);
