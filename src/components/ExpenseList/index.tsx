import React, { useMemo } from 'react';

import { Card, CardBody, Divider, Stack, Text } from '@chakra-ui/react';
import { Expense, User } from '@prisma/client';
import { sortBy } from 'lodash';
import moment from 'moment';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

import { getExpenseName } from '@/modules/expenses';
import { formatAmount } from '@/modules/money';
import { getUserFullName } from '@/modules/users';
import { Routes } from '@/routing';

interface ExpenseListProps {
	expenses: (Expense & { sender: User })[];
}

const ExpenseList = (props: ExpenseListProps) => {
	const { expenses } = props;

	const sortedExpenses = useMemo(() => {
		return sortBy(expenses, (e) => e.createdAt);
	}, [expenses]);

	return (
		<Card background="white">
			<Stack divider={<Divider />} spacing={0}>
				{sortedExpenses.map((expense) => (
					<Link key={expense.id} prefetch={false} href={Routes.Expense(expense.groupId, expense.id)}>
						<CardBody key={expense.id}>
							<Stack direction="row" alignItems="center" spacing="4">
								<Stack flex="1" direction="column" alignItems="flex-start" spacing={0}>
									<Text textAlign="left" fontSize="md">
										{getExpenseName(expense)}
									</Text>
									<Text fontSize="xs" textAlign="left">
										{`${moment(expense.createdAt).format('MMM Do, YYYY')} by ${getUserFullName(
											expense.sender,
										)}`}
									</Text>
								</Stack>
								<Stack direction="row" alignItems="center" spacing={1}>
									<Text fontSize="l">{formatAmount(expense.amount, expense.currency)}</Text>
									<RiArrowRightSLine />
								</Stack>
							</Stack>
						</CardBody>
					</Link>
				))}
			</Stack>
		</Card>
	);
};

export default ExpenseList;
