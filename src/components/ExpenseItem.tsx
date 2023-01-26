import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { getExpenseName } from '@/modules/expenses';
import { formatAmount } from '@/modules/money';
import { getUserDisplayName } from '@/modules/users';
import { Routes } from '@/routing';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';

import ChatItem from './ChatItem';

interface Props {
	expense: ExpenseWithSenderAndShares;
	hideAvatar?: boolean;
	hideName?: boolean;
	isSelf?: boolean;
}

const ExpenseItem = (props: Props) => {
	const session = useSession();
	const userId = session?.data?.userId;
	const { expense, hideAvatar, isSelf } = props;

	const ownShare = !!userId
		? expense.shares.find((share) => share.memberId === userId)?.amount
		: null;

	return (
		<ChatItem
			sender={expense.sender}
			hideAvatar={hideAvatar}
			isSelf={isSelf}
		>
			<Link href={Routes.Expense(expense.groupId, expense.id)}>
				<Box
					background="green.500"
					borderRadius="lg"
					maxWidth="100%"
					minWidth="300"
					overflow="hidden"
				>
					<Text
						px="2"
						pt="1"
						fontSize="xs"
						color="whiteAlpha.800"
						align="right"
					>
						{moment(expense.createdAt).format('HH:mm')}
					</Text>
					<Box
						p="6"
						alignItems="center"
						justifyContent="center"
						display="flex"
						flexDirection="column"
					>
						<Text
							fontSize="xs"
							align="center"
							color="whiteAlpha.900"
						>
							{!isSelf
								? getUserDisplayName(expense.sender, 'short')
								: 'You'}{' '}
							paid
						</Text>
						<Text
							align="center"
							fontSize="2xl"
							color="whiteAlpha.900"
						>
							{formatAmount(expense.amount, expense.currency)}
						</Text>
						<Text color="white">{getExpenseName(expense)}</Text>
					</Box>
					<Box p="2" background="green.700">
						<Text color="white" align="center">
							Your share:{' '}
							{ownShare != null
								? formatAmount(ownShare, expense.currency)
								: '???'}
						</Text>
					</Box>
				</Box>
			</Link>
		</ChatItem>
	);
};

export default ExpenseItem;
