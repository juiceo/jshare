import React, { useMemo, useRef, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { AnimatePresence, motion } from 'framer-motion';
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
import NotFoundPage from '@/pages/404';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { MessageWithSender } from '@/schemas/message';
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
	const groupQuery = trpc.groups.getById.useQuery(groupId);
	const messagesQuery = trpc.messages.listByGroupIdInfinite.useInfiniteQuery(
		{
			groupId,
			limit: MESSAGES_PER_PAGE,
		},
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
		},
	);
	const remoteExpenses = trpc.expenses.listByGroupId.useQuery(groupId);

	const group = groupQuery.data;

	const [localMessages, setLocalMessages] = useState<MessageWithSender[]>([]);
	const [localExpenses, setLocalExpenses] = useState<ExpenseWithSenderAndShares[]>([]);

	trpc.messages.onSendMessageToGroup.useSubscription(groupId, {
		onData: (message) => {
			setLocalMessages((prev) => [...prev, message]);
			if (scrolledDownRef.current) {
				scrollToBottom();
			}
		},
	});
	trpc.expenses.onCreateExpenseInGroup.useSubscription(groupId, {
		onData: (expense) => {
			setLocalExpenses((prev) => [...prev, expense]);
			if (scrolledDownRef.current) {
				scrollToBottom();
			}
		},
	});

	const messages = useMemo(() => {
		const remoteMessages =
			messagesQuery.data?.pages.flatMap((page) => {
				return page.messages;
			}) ?? [];
		return sortBy([...remoteMessages, ...localMessages], (message) => -message.createdAt);
	}, [localMessages, messagesQuery.data?.pages]);

	const expenses = useMemo(() => {
		const firstMessageCreated = messages[messages.length - 1]?.createdAt?.valueOf() ?? 0;
		const allExpenses = [...(remoteExpenses.data ?? []), ...localExpenses];
		const filteredExpenses = messagesQuery.hasNextPage
			? allExpenses.filter((e) => e.createdAt.valueOf() >= firstMessageCreated)
			: allExpenses;
		return sortBy(filteredExpenses, (e) => -e.createdAt);
	}, [localExpenses, messages, messagesQuery.hasNextPage, remoteExpenses.data]);

	const scrollToBottom = (behavior: 'auto' | 'smooth' = 'auto') => {
		bottomRef.current?.scrollIntoView({ behavior });
	};

	if (!group) return <NotFoundPage />;

	return (
		<Page
			title={group.name}
			appBar={<GroupHeader group={group} />}
			footer={<GroupMessagesFooter group={group} onSendMessage={scrollToBottom} />}
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
				<Box height="1px" width="full" background="red" ref={bottomRef} />
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
	const groupId = ctx.params?.groupId as string | undefined;
	if (!groupId) {
		return {
			notFound: true,
		};
	}

	const session = await getSession(ctx);
	const ssg = createProxySSGHelpers({
		router: appRouter,
		ctx: await createContextInner({ session }),
		transformer: superjson,
	});

	try {
		const data = await ssg.groups.getById.fetch(groupId);
		const key = trpc.groups.getById.getQueryKey(groupId);
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
		await ssg.expenses.listByGroupId.prefetch(groupId),
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
