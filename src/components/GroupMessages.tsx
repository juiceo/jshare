import React, { useEffect, useMemo } from 'react';

import { Box, Stack } from '@chakra-ui/react';
import { Expense, ExpenseShareWithMember, Message, User } from '@prisma/client';
import { AnimatePresence, motion } from 'framer-motion';
import { chain } from 'lodash';
import { useSession } from 'next-auth/react';
import { useInView } from 'react-intersection-observer';

import { ExpenseWithSenderAndShares } from '@/schemas/expense';

import ExpenseItem from './ExpenseItem';
import MessageItem from './MessageItem';
import ScrollDownButton from './ScrollDownButton';

interface Props {
	membersById: Record<string, User>;
	messages: Message[];
	expenses: ExpenseWithSenderAndShares[];
	loading: boolean;
}

const MotionBox = motion(Box);

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
	const { membersById, messages, expenses, loading } = props;
	const session = useSession();

	const { ref, inView: isScrolledDown } = useInView({
		/* Optional options */
		threshold: 0,
	});
	const isScrolledDownRef = React.useRef<boolean>(isScrolledDown);

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

	const lastItemId = itemsWithType[itemsWithType.length - 1]?.value?.id;

	useEffect(() => {
		isScrolledDownRef.current = isScrolledDown;
	}, [isScrolledDown]);

	useEffect(() => {
		if (isScrolledDownRef.current) {
			scrollToBottom();
		}
	}, [lastItemId]);

	const scrollToBottom = () => {
		setTimeout(() => {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth',
			});
		}, 100);
	};

	return (
		<Box
			p="2"
			display="flex"
			flexDirection="column-reverse"
			position="relative"
		>
			{!loading && (
				<Stack
					spacing={2}
					direction="column"
					sx={{ position: 'relative' }}
				>
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
												membersById[item.value.id] ??
												null
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
												membersById[item.value.id] ??
												null
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
						{!isScrolledDown ? (
							<MotionBox
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
								}}
								exit={{
									opacity: 0,
								}}
								sx={{
									position: 'fixed',
									bottom: '80px',
									right: '8px',
								}}
							>
								<ScrollDownButton onClick={scrollToBottom} />
							</MotionBox>
						) : null}
					</AnimatePresence>
					<Box
						ref={ref}
						sx={{
							position: 'absolute',
							height: '200px',
							width: '1px',
							bottom: 0,
							left: 0,
							right: 0,
							opacity: 0,
						}}
					></Box>
				</Stack>
			)}
		</Box>
	);
};

export default GroupMessages;
