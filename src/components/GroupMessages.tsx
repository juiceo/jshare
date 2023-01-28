import React, { useMemo } from 'react';

import { Box, CircularProgress, Stack, Text } from '@chakra-ui/react';
import { Expense, ExpenseShareWithMember, Message, User } from '@prisma/client';
import { AnimatePresence } from 'framer-motion';
import { chain } from 'lodash';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import InfiniteScroll from 'react-infinite-scroller';

import { getUserDisplayName } from '@/modules/users';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';

import ExpenseItem from './ExpenseItem';
import MessageItem from './MessageItem';

interface Props {
	membersById: Record<string, User>;
	messages: Message[];
	expenses: ExpenseWithSenderAndShares[];
	hasLoadedAll: boolean;
	isLoadingMore: boolean;
	onLoadMore: () => void;
	ownerId: string;
	createdAt: Date;
}

type MessageWithType =
	| {
			type: 'message';
			value: Message;
	  }
	| {
			type: 'expense';
			value: Expense & { shares: ExpenseShareWithMember[] };
	  };

const GroupMessages = (props: Props) => {
	const {
		membersById,
		messages,
		expenses,
		hasLoadedAll,
		isLoadingMore,
		onLoadMore,
		ownerId,
		createdAt,
	} = props;
	const session = useSession();

	const itemsWithType = useMemo(() => {
		const messageItems: MessageWithType[] = messages.map((message) => ({
			type: 'message',
			value: message,
		}));

		const expenseItems: MessageWithType[] = expenses.map((expense) => ({
			type: 'expense',
			value: expense,
		}));

		return chain([...messageItems, ...expenseItems])
			.uniqBy((item) => item.value.id)
			.sortBy((item) => item.value.createdAt)
			.value();
	}, [messages, expenses]);

	const owner = membersById[ownerId];

	return (
		<Box
			p="2"
			display="flex"
			flexDirection="column-reverse"
			position="relative"
		>
			<InfiniteScroll
				pageStart={0}
				loadMore={() => {
					if (isLoadingMore) return;
					onLoadMore();
				}}
				hasMore={!hasLoadedAll}
				initialLoad={false}
				threshold={500}
				loader={
					<Stack
						direction="column"
						alignItems="center"
						p="8"
						key="loading"
					>
						<CircularProgress
							isIndeterminate
							size="20px"
							color="green.300"
						/>
						<Text fontSize="sm">Loading older messages...</Text>
					</Stack>
				}
				isReverse
			>
				<Stack
					spacing={2}
					direction="column"
					sx={{ position: 'relative' }}
				>
					<Stack direction="column" alignItems="center" p="8">
						<Text fontSize="sm" maxWidth="50%" textAlign="center">
							{`Group created by ${getUserDisplayName(
								owner,
								'full',
							)} on ${moment(createdAt).format(
								'dddd MMM Do, YYYY',
							)}`}
						</Text>
					</Stack>
					<AnimatePresence initial={false}>
						{itemsWithType.map((item, index) => {
							const senderId = item.value.senderId;
							const isSelf = session.data?.userId === senderId;
							const nextItemHasSameSender =
								itemsWithType[index + 1]?.value.senderId ===
								senderId;
							const prevItemHasSameSender =
								itemsWithType[index - 1]?.value.senderId ===
								senderId;
							switch (item.type) {
								case 'message': {
									return (
										<MessageItem
											key={item.value.id}
											message={item.value}
											sender={
												membersById[
													item.value.senderId
												] ?? null
											}
											hideAvatar={nextItemHasSameSender}
											hideName={prevItemHasSameSender}
											isSelf={isSelf}
										/>
									);
								}
								case 'expense': {
									return (
										<ExpenseItem
											key={item.value.id}
											expense={item.value}
											sender={
												membersById[
													item.value.senderId
												] ?? null
											}
											hideAvatar={nextItemHasSameSender}
											hideName={prevItemHasSameSender}
											isSelf={isSelf}
										/>
									);
								}
								default: {
									return null;
								}
							}
						})}
					</AnimatePresence>
				</Stack>
			</InfiniteScroll>
		</Box>
	);
};

export default GroupMessages;
