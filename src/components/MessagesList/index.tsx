import React, { useMemo } from 'react';

import { Stack } from '@chakra-ui/react';
import { Expense, ExpenseShareWithMember, Message, User } from '@prisma/client';
import { AnimatePresence } from 'framer-motion';
import { chain } from 'lodash';
import moment from 'moment';
import { useSession } from 'next-auth/react';

import BotMessageItem from '@/components/MessagesList/BotMessageItem';
import DateHeader from '@/components/MessagesList/DateHeader';
import ExpenseItem from '@/components/MessagesList/ExpenseItem';
import GroupCreated from '@/components/MessagesList/GroupCreated';
import LoadMoreMessages from '@/components/MessagesList/LoadMoreMessages';
import MessageItem from '@/components/MessagesList/MessageItem';
import { byId } from '@/modules/common/utils';
import { getAllGroupMembers } from '@/modules/groups';
import { GroupWithMembers } from '@/schemas';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';

interface Props {
	messages: Message[];
	expenses: ExpenseWithSenderAndShares[];
	group: GroupWithMembers;
	onLoadMore: () => void;
	canLoadMore: boolean;
	isLoadingMore: boolean;
}

type MessageWithType =
	| {
			type: 'message';
			value: Message;
	  }
	| {
			type: 'bot';
			value: Message;
	  }
	| {
			type: 'expense';
			value: Expense & { shares: ExpenseShareWithMember[] };
	  };

const MessageList = (props: Props) => {
	const session = useSession();
	const { messages, expenses, group, onLoadMore, canLoadMore, isLoadingMore } = props;

	const membersById = useMemo(() => {
		return byId(getAllGroupMembers(group));
	}, [group]);

	const itemsWithType = useMemo(() => {
		const messageItems: MessageWithType[] = messages.map((message) => {
			switch (message.type) {
				case 'BOT': {
					return {
						type: 'bot',
						value: message,
					};
				}
				case 'EXPENSE':
				case 'TEXT': {
					return {
						type: 'message',
						value: message,
					};
				}
			}
		});

		const expenseItems: MessageWithType[] = expenses.map((expense) => ({
			type: 'expense',
			value: expense,
		}));

		return chain([...messageItems, ...expenseItems])
			.uniqBy((item) => item.value.id)
			.sortBy((item) => item.value.createdAt)
			.value();
	}, [messages, expenses]);

	return (
		<Stack spacing={2} direction="column" sx={{ position: 'relative' }} py="2" pb="10">
			{canLoadMore ? (
				<LoadMoreMessages onLoadMore={onLoadMore} isLoadingMore={isLoadingMore} />
			) : (
				<GroupCreated group={group} />
			)}
			<AnimatePresence initial={false}>
				{itemsWithType.map((item, index) => {
					const senderId = item.value.senderId;
					const isSelf = session.data?.userId === senderId;
					const nextItem: MessageWithType | undefined = itemsWithType[index + 1];
					const prevItem: MessageWithType | undefined = itemsWithType[index - 1];
					const nextItemHasSameSender = nextItem?.value.senderId === senderId;
					const prevItemHasSameSender = prevItem?.value.senderId === senderId;

					const dateSeparator =
						!!prevItem && !moment(prevItem.value.createdAt).isSame(item.value.createdAt, 'date')
							? item.value.createdAt
							: null;
					switch (item.type) {
						case 'message': {
							return [
								!!dateSeparator ? (
									<DateHeader
										key={dateSeparator.toString()}
										date={dateSeparator}
										messageId={item.value.id}
									/>
								) : null,
								<MessageItem
									id={item.value.id}
									key={item.value.id}
									message={item.value}
									sender={!!item.value.senderId ? membersById[item.value.senderId] ?? null : null}
									hideAvatar={nextItemHasSameSender}
									hideName={prevItemHasSameSender}
									isSelf={isSelf}
								/>,
							];
						}
						case 'bot': {
							return [
								!!dateSeparator ? (
									<DateHeader
										key={dateSeparator.toString()}
										date={dateSeparator}
										messageId={item.value.id}
									/>
								) : null,
								<BotMessageItem id={item.value.id} key={item.value.id} message={item.value} />,
							];
						}
						case 'expense': {
							return [
								!!dateSeparator ? (
									<DateHeader
										key={dateSeparator.toString()}
										date={dateSeparator}
										messageId={item.value.id}
									/>
								) : null,
								<ExpenseItem
									id={item.value.id}
									key={item.value.id}
									expense={item.value}
									sender={membersById[item.value.senderId] ?? null}
									payer={membersById[item.value.payerId] ?? null}
									hideAvatar={nextItemHasSameSender}
									hideName={prevItemHasSameSender}
									isSelf={isSelf}
								/>,
							];
						}
						default: {
							return null;
						}
					}
				})}
			</AnimatePresence>
		</Stack>
	);
};

export default MessageList;
