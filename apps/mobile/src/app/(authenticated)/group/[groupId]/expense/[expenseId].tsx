import { formatAmount } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/expense/[expenseId]',
    },
    ({ params }) => {
        const [expense] = trpc.expenses.get.useSuspenseQuery({ id: params.expenseId });
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
                </Screen.Content>
            </Screen>
        );
    }
);
