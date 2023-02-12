import React, { useMemo } from 'react';

import { Avatar, Card, CardBody, Divider, Stack, Text } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { chain } from 'lodash';

import { ByUserId } from '@/modules/common/types';
import { EMPTY_EXPENSE_SUMMARY, ExpenseSummary } from '@/modules/expenses';
import { CurrencyCode, formatAmount } from '@/modules/money';
import { getUserFullName } from '@/modules/users';

interface BalanceListProps {
	currency: CurrencyCode;
	members: User[];
	summaries: ByUserId<ExpenseSummary>;
}

const BalanceList = (props: BalanceListProps) => {
	const { members, summaries, currency } = props;

	const membersWithExpenseSummary = useMemo(() => {
		return chain(members)
			.map((member) => ({
				member,
				summary: summaries[member.id] ?? EMPTY_EXPENSE_SUMMARY,
			}))
			.sortBy(({ summary }) => -summary.balance)
			.value();
	}, [members, summaries]);

	const renderBalance = (summary: ExpenseSummary) => {
		const { balance } = summary;

		const textColor = balance === 0 ? 'blackAlpha.500' : balance > 0 ? 'green.500' : 'red.500';

		return (
			<Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="right">
				{formatAmount(balance, currency)}
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
							<Stack flex="1" direction="column" alignItems="flex-start" spacing={0}>
								<Text textAlign="left">{getUserFullName(member)}</Text>
								<Text textAlign="left" fontSize="xs">
									{`Paid ${formatAmount(summary.paid, currency)}, Owed ${formatAmount(
										summary.owed,
										currency,
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
