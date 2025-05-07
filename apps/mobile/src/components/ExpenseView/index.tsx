import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';

import { formatAmount } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import type { Docs } from '~/lib/store/collections';

export type ExpenseViewProps = {
    expense: Docs.Expense;
};

export const ExpenseView = observer((props: ExpenseViewProps) => {
    const expense = props.expense.data;

    return (
        <Stack column>
            <Stack column center ar="16/9" p="2xl" spacing="lg">
                <Typography variant="h6">{expense.description}</Typography>
                <Stack column center>
                    <Typography
                        variant="h1"
                        strikeThrough={!!expense.archived}
                        color={expense.archived ? 'hint' : 'primary'}
                    >
                        {formatAmount(expense.amount, expense.currency)}
                    </Typography>
                    {expense.conversion && (
                        <Typography variant="caption" color="hint">
                            = {formatAmount(expense.conversion.amount, expense.conversion.currency)}
                        </Typography>
                    )}
                </Stack>
                <Stack row center spacing="md">
                    <Typography>Paid by</Typography>
                    <Avatar userId={expense.payerId} size="sm" />
                    <Typography>
                        <UserName userId={expense.payerId} variant="short" />
                    </Typography>
                </Stack>
            </Stack>
            <Stack column center>
                <Typography variant="caption">
                    Created: {dayjs(expense.createdAt).format('MMM D, YYYY HH:mm')} by{' '}
                    <UserName userId={expense.ownerId} variant="short" />
                </Typography>
                {!dayjs(expense.createdAt).isSame(expense.updatedAt) && (
                    <Typography variant="caption">
                        Last updated: {dayjs(expense.updatedAt).format('MMM D, YYYY HH:mm')}
                    </Typography>
                )}
            </Stack>
            <Stack column bg="background.elevation1" m="xl" br="xl">
                {expense.shares.map((share) => (
                    <Stack key={share.id} row alignCenter spacing="xl" p="xl">
                        <Avatar userId={share.userId} size="md" />
                        <Typography flex={1}>
                            <UserName userId={share.userId} variant="short" />
                        </Typography>
                        <Stack column alignEnd>
                            <Typography>{formatAmount(share.amount, share.currency)}</Typography>
                            {share.conversion && (
                                <Typography variant="caption" color="hint">
                                    ={' '}
                                    {formatAmount(
                                        share.conversion.amount,
                                        share.conversion.currency
                                    )}
                                </Typography>
                            )}
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
});
