import React from 'react';

import { Avatar, Box, Divider, Image, Text } from '@chakra-ui/react';
import { Expense, ExpenseShareWithMember, User } from '@prisma/client';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { getExpenseName } from '@/modules/expenses';
import { formatAmount } from '@/modules/money';
import { getUserDisplayName } from '@/modules/users';
import { Routes } from '@/routing';

import ChatItem from './ChatItem';

interface Props {
	id: string;
	expense: Expense & { shares: ExpenseShareWithMember[] };
	payer: User | null;
	sender: User | null;
	hideAvatar?: boolean;
	hideName?: boolean;
	isSelf?: boolean;
	isPaidBySelf?: boolean;
}

const ExpenseItem = (props: Props) => {
	const session = useSession();
	const userId = session?.data?.userId;
	const { id, expense, sender, payer, hideAvatar, isSelf, isPaidBySelf } = props;

	const ownShare = !!userId ? expense.shares.find((share) => share.memberId === userId)?.amount : null;

	return (
		<ChatItem sender={sender} hideAvatar={hideAvatar} isSelf={isSelf} id={id}>
			<Link href={Routes.Expense(expense.groupId, expense.id)} style={{ alignSelf: 'stretch' }}>
				<Box
					background="green.500"
					borderRadius="lg"
					maxWidth="100%"
					width="100%"
					alignSelf="stretch"
					overflow="hidden"
					position="relative"
				>
					{!!expense.image && (
						<Box mb="2" background="black">
							<Image src={expense.image} width="100%" />
						</Box>
					)}
					<Text
						px="2"
						pt="1"
						fontSize="xs"
						color="whiteAlpha.800"
						align="right"
						position="absolute"
						right="0"
						top="0"
						zIndex="10"
					>
						{moment(expense.createdAt).format('HH:mm')}
					</Text>
					<Box p="6" pt={4} alignItems="center" justifyContent="center" display="flex" flexDirection="column">
						<Text fontSize="xs" align="center" color="whiteAlpha.900">
							<Box m={2} alignItems="center" display="flex" flexDir="column">
								<Avatar my={1} size="sm" src={payer?.image ?? ''} />
								{!isPaidBySelf ? getUserDisplayName(payer, 'short') : 'You'} paid
							</Box>
						</Text>
						<Divider w={'50%'} m={2} />
						<Text align="center" fontSize="2xl" color="whiteAlpha.900">
							{formatAmount(expense.amount, expense.currency)}
						</Text>
						<Text color="white">{getExpenseName(expense)}</Text>
					</Box>
					<Box p="2" background="green.700">
						<Text color="white" align="center">
							Your share: {ownShare != null ? formatAmount(ownShare, expense.currency) : '???'}
						</Text>
					</Box>
				</Box>
			</Link>
		</ChatItem>
	);
};

export default ExpenseItem;
