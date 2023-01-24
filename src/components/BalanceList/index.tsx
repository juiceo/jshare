import React, { useMemo } from 'react';

import { Avatar, Card, CardBody, Divider, Stack, Text } from '@chakra-ui/react';
import { Expense, ExpenseShareWithMember, User } from '@prisma/client';
import { chain } from 'lodash';

import {
	EMPTY_EXPENSE_SUMMARY,
	ExpenseSummary,
	getExpenseSummaryByMember,
} from '@/utils/expenses';
import { formatAmount } from '@/utils/money';
import { getUserFullName } from '@/utils/users';

interface BalanceListProps {
	members: User[];
	expenses: (Expense & { shares: ExpenseShareWithMember[] })[];
}

const BalanceList = (props: BalanceListProps) => {
	const { members, expenses } = props;
	const expenseSummaries = useMemo(
		() => getExpenseSummaryByMember(expenses),
		[expenses],
	);

	const membersWithExpenseSummary = useMemo(() => {
		return chain(members)
			.map((member) => ({
				member,
				summary: expenseSummaries[member.id] ?? EMPTY_EXPENSE_SUMMARY,
			}))
			.sortBy(({ summary }) => -summary.balance)
			.value();
	}, [members, expenseSummaries]);

	const renderBalance = (summary: ExpenseSummary) => {
		const { balance } = summary;

		const textColor =
			balance === 0 ? 'gray.500' : balance > 0 ? 'green.500' : 'red.500';

		return (
			<Text fontSize="xl" fontWeight="bold" color={textColor}>
				{formatAmount(balance, '€')}
			</Text>
		);
	};

	return (
		<Card background="white">
			<Stack divider={<Divider />} spacing={0}>
				{membersWithExpenseSummary.map(({ member, summary }) => (
					<CardBody key={member.id}>
						<Stack direction="row" alignItems="center" spacing="4">
							<Avatar size="md" src={member.image ?? undefined} />
							<Stack
								flex="1"
								direction="column"
								alignItems="flex-start"
								spacing={0}
							>
								<Text>{getUserFullName(member)}</Text>
								<Text fontSize="xs">
									{`Paid ${formatAmount(
										summary.paid,
										'€',
									)}, Owed ${formatAmount(
										summary.owed,
										'€',
									)}`}
								</Text>
							</Stack>
							{renderBalance(summary)}
						</Stack>
					</CardBody>
				))}
			</Stack>
		</Card>
	);
};

export default BalanceList;
