import React, { useMemo } from 'react';

import { Box, Stack } from '@chakra-ui/react';
import { Message, User } from '@prisma/client';
import { AnimatePresence } from 'framer-motion';
import { chain } from 'lodash';
import { useSession } from 'next-auth/react';

import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { MessageWithSender } from '@/schemas/message';

import ExpenseItem from './ExpenseItem';
import MessageItem from './MessageItem';

interface Props {
	membersById: Record<string, User>;
	messages: Message[];
	expenses: ExpenseWithSenderAndShares[];
	loading: boolean;
}

type MessageWithType =
	| {
			type: 'message';
			value: MessageWithSender;
	  }
	| {
			type: 'expense';
			value: ExpenseWithSenderAndShares;
	  };

const GroupMessages = (props: Props) => {
	const { membersById, messages, expenses, loading } = props;
	const session = useSession();

	const itemsWithType = useMemo(() => {
		const messageItems: MessageWithType[] = messages.map((message) => ({
			type: 'message',
			value: {
				...message,
				sender: membersById[message.senderId] ?? null,
			},
		}));

		const expenseItems: MessageWithType[] = expenses.map((expense) => ({
			type: 'expense',
			value: {
				...expense,
				sender: membersById[expense.senderId] ?? null,
			},
		}));

		return chain([...messageItems, ...expenseItems])
			.uniqBy((item) => item.value.id)
			.sortBy((item) => item.value.createdAt)
			.value();
	}, [messages, expenses, membersById]);

	return (
		<Box
			height="100%"
			p="2"
			overflow="auto"
			scrollBehavior="smooth"
			display="flex"
			flexDirection="column-reverse"
			position="relative"
		>
			{!loading && (
				<Stack spacing={2} direction="column">
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
											message={item.value}
											key={item.value.id}
											hideAvatar={nextItemHasSameSender}
											hideName={prevItemHasSameSender}
											isSelf={isSelf}
										/>
									);
								}
								case 'expense': {
									return (
										<ExpenseItem
											expense={item.value}
											key={item.value.id}
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
			)}
		</Box>
	);
};

export default GroupMessages;
