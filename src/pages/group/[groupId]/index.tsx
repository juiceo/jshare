import React, { useMemo, useRef, useState } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { AnimatePresence, motion } from 'framer-motion';
import { produce } from 'immer';
import { sortBy } from 'lodash';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';
import superjson from 'superjson';

import GroupHeader from '@/components/GroupHeader';
import GroupMessagesFooter from '@/components/GroupMessagesFooter';
import MessagesList from '@/components/MessagesList';
import Page from '@/components/Page';
import ScrollDetector from '@/components/ScrollDetector';
import ScrollDownButton from '@/components/ScrollDownButton';
import { ExpenseWithSenderAndShares } from '@/modules/expenses';
import { getGroupMemberCount } from '@/modules/groups';
import { MessageWithSender } from '@/modules/messages';
import NotFoundPage from '@/pages/404';
import { createContextInner } from '@/server/context';
import { appRouter } from '@/server/routers/_app';
import { trpc } from '@/services/trpc';

const MotionBox = motion(Box);

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const MESSAGES_PER_PAGE = 50;

const GroupPage = (props: Props) => {
	const { groupId } = props;
	const bottomRef = useRef<HTMLDivElement>(null);
	const scrolledDownRef = useRef<boolean>(true);
	const [isScrolledDown, setScrolledDown] = useState<boolean>(true);
	const queryClient = useQueryClient();
	const groupQuery = trpc.groups.getById.useQuery({ groupId });
	const messagesQuery = trpc.messages.listByGroupIdInfinite.useInfiniteQuery(
		{
			groupId,
			limit: MESSAGES_PER_PAGE,
		},
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
		},
	);
	const expensesQuery = trpc.expenses.listByGroupId.useQuery({ groupId });

	const group = groupQuery.data;

	trpc.messages.onCreateMessageInGroup.useSubscription(
		{ groupId },
		{
			onData: (message) => {
				queryClient.setQueryData(
					getQueryKey(trpc.messages.listByGroupIdInfinite, { groupId, limit: MESSAGES_PER_PAGE }, 'infinite'),
					(
						prev:
							| InfiniteData<{
									messages: MessageWithSender[];
									nextCursor: string | undefined;
							  }>
							| undefined,
					) => {
						if (!prev) return;

						return produce(prev, (draft) => {
							draft.pages[0]?.messages.unshift(message);
						});
					},
				);
			},
		},
	);
	trpc.expenses.onCreateExpenseInGroup.useSubscription(
		{ groupId },
		{
			onData: (expense) => {
				queryClient.setQueryData(
					getQueryKey(trpc.expenses.listByGroupId, { groupId }, 'query'),
					(prev: ExpenseWithSenderAndShares[] | undefined) => {
						if (!prev) return;
						return [expense, ...prev];
					},
				);
			},
		},
	);

	const messages = useMemo(() => {
		const allMessages =
			messagesQuery.data?.pages.flatMap((page) => {
				return page.messages;
			}) ?? [];
		return sortBy([...allMessages], (message) => -message.createdAt);
	}, [messagesQuery.data?.pages]);

	const expenses = useMemo(() => {
		const firstMessageCreated = messages[messages.length - 1]?.createdAt?.valueOf() ?? 0;
		const allExpenses = expensesQuery.data ?? [];
		const filteredExpenses = messagesQuery.hasNextPage
			? allExpenses.filter((e) => e.createdAt.valueOf() >= firstMessageCreated)
			: allExpenses;
		return sortBy(filteredExpenses, (e) => -e.createdAt);
	}, [messages, messagesQuery.hasNextPage, expensesQuery.data]);

	const scrollToBottom = (behavior: 'auto' | 'smooth' = 'auto') => {
		bottomRef.current?.scrollIntoView({ behavior });
	};

	if (!group) return <NotFoundPage />;

	return (
		<Page
			title={group.name}
			appBar={<GroupHeader group={group} />}
			footer={
				<GroupMessagesFooter
					group={group}
					onSendMessage={scrollToBottom}
					showInviteBanner={!groupQuery.isLoading && getGroupMemberCount(group) === 1}
				/>
			}
			contentProps={{
				position: 'relative',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					top: 0,
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column-reverse',
				}}
			>
				<Box height="1px" width="full" background="transparent" ref={bottomRef} />
				<ScrollDetector
					onChange={setScrolledDown}
					onChangeRef={scrolledDownRef}
					height="200px"
					initial={true}
				/>
				<MessagesList
					messages={messages}
					expenses={expenses}
					group={group}
					onLoadMore={messagesQuery.fetchNextPage}
					canLoadMore={messagesQuery.hasNextPage ?? false}
					isLoadingMore={messagesQuery.isFetchingNextPage}
				/>
			</Box>

			<AnimatePresence initial={false}>
				{!isScrolledDown && (
					<MotionBox
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						position="fixed"
						zIndex="10"
						bottom="72px"
						right="0"
						p="2"
					>
						<ScrollDownButton onClick={() => scrollToBottom('smooth')} />
					</MotionBox>
				)}
			</AnimatePresence>
		</Page>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { groupId } = ctx.params ?? {};
	if (!groupId || typeof groupId !== 'string') {
		return {
			notFound: true,
		};
	}

	const session = await getSession(ctx);
	const ssg = createServerSideHelpers({
		router: appRouter,
		ctx: await createContextInner({ session }),
		transformer: superjson,
	});

	try {
		const data = await ssg.groups.getById.fetch({ groupId });
		const key = trpc.groups.getById.getQueryKey({ groupId });
		if (!data) throw new Error('Group not found');
		ssg.queryClient.setQueryData(key, data);
	} catch (err) {
		return {
			notFound: true,
		};
	}

	await Promise.all([
		await ssg.messages.listByGroupIdInfinite.prefetchInfinite({
			groupId,
			limit: MESSAGES_PER_PAGE,
		}),
		await ssg.expenses.listByGroupId.prefetch({ groupId }),
	]);

	return {
		props: {
			groupId,
			trpcState: ssg.dehydrate(),
			session,
		},
	};
};

export default GroupPage;
