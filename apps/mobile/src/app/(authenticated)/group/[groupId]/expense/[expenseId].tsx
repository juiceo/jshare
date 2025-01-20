import { formatAmount } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CurrencySelect } from '~/components/CurrencySelect';
import { ExpenseSharesEditor } from '~/components/ExpenseShares/ExpenseSharesEditor';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserSelect } from '~/components/UserSelect';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/expense/[expenseId]',
    },
    ({ params }) => {
        const [expense] = trpc.expenses.get.useSuspenseQuery({ id: params.expenseId });
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        return (
            <Screen>
                <Screen.Header title="Expense details" />
                <Screen.Content disableHeaderOffset scrollable>
                    <Stack column center ar="1/1" p="2xl">
                        <Typography variant="h6">{expense.description}</Typography>
                        <Typography variant="h1">
                            {formatAmount(expense.amount, expense.currency)}
                        </Typography>
                        {expense.conversion && (
                            <Typography variant="caption">
                                ={' '}
                                {formatAmount(
                                    expense.conversion.amount,
                                    expense.conversion.currency
                                )}
                            </Typography>
                        )}
                    </Stack>
                    <Stack column p="xl" spacing="md">
                        <TextField
                            label="Description"
                            placeholder="Write a brief description"
                            value={expense.description ?? ''}
                            onChange={() => {}}
                            error={'' /** TODO: Add error state */}
                        />
                        <UserSelect
                            label="Paid by"
                            placeholder="Select person"
                            type="participants"
                            users={group.participants ?? []}
                            value={expense.payerId}
                            onChange={(userId, profile) => {
                                /** TODO  */
                            }}
                            error={'' /** TODO */}
                            MenuProps={{
                                title: 'Who paid?',
                            }}
                        />
                        <CurrencySelect
                            label="Currency"
                            placeholder="Select currency"
                            value={expense.currency}
                            onChange={() => {
                                /* TODO */
                            }}
                            error={'' /** TODO */}
                            MenuProps={{
                                title: 'Select currency',
                            }}
                        />
                    </Stack>
                    <Stack p="xl">
                        <ExpenseSharesEditor
                            value={expense.shares}
                            onChange={() => {}}
                            expense={expense}
                            groupMembers={group.participants}
                        />
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
