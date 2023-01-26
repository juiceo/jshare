import React from 'react';

import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardHeader,
	Divider,
	Stack,
	Text,
} from '@chakra-ui/react';
import { ExpenseShareWithMember } from '@prisma/client';
import moment from 'moment';

import { byId } from '@/modules/common/utils';
import { getAllGroupMembers } from '@/modules/groups';
import { formatAmount } from '@/modules/money';
import { getUserDisplayName } from '@/modules/users';
import { GroupWithMembers } from '@/schemas';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';

import AmountWithLabel from './AmountWithLabel';

interface ExpenseSummaryProps {
	expense: ExpenseWithSenderAndShares;
	group: GroupWithMembers;
}

const ExpenseSummary = (props: ExpenseSummaryProps) => {
	const { group, expense } = props;
	const membersById = byId(getAllGroupMembers(group));

	const renderShare = (share: ExpenseShareWithMember) => {
		const user = membersById[share.memberId];

		return (
			<CardBody key={share.memberId}>
				<Stack direction="row" spacing={4}>
					<Avatar src={user?.image ?? undefined} />
					<Stack direction="column" flex={1}>
						<Text>{getUserDisplayName(user, 'full')}</Text>
					</Stack>
					<Text>{formatAmount(share.amount, expense.currency)}</Text>
				</Stack>
			</CardBody>
		);
	};

	const getUserName = (userId: string) => {
		const user = membersById[userId];
		return getUserDisplayName(user, 'full');
	};

	return (
		<Box>
			<Stack direction="column">
				<AmountWithLabel
					label={`Paid by ${getUserName(expense.payerId)}`}
					amount={expense.amount}
					currency={expense.currency}
				/>
			</Stack>
			<Card background="white" mt="8">
				<CardHeader textAlign="center">
					<Text fontSize="lg">Shares</Text>
				</CardHeader>
				<Divider />
				{expense.shares.map((share) => renderShare(share))}
			</Card>
			<Box mt="4">
				<Text fontSize="xs" textAlign="center">
					Created{' '}
					{moment(expense.createdAt).format('MMMM Do, YYYY HH:mm')} by{' '}
					{getUserName(expense.senderId)}
				</Text>
			</Box>
		</Box>
	);
};

export default ExpenseSummary;
