import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { AnimatePresence, motion } from 'framer-motion';
import { sortBy } from 'lodash';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';
import superjson from 'superjson';

import GroupHeader from '@/components/GroupHeader';
import GroupMessages from '@/components/GroupMessages';
import GroupMessagesFooter from '@/components/GroupMessagesFooter';
import Page from '@/components/Page';
import ScrollDetector from '@/components/ScrollDetector';
import ScrollDownButton from '@/components/ScrollDownButton';
import { getAllGroupMembers } from '@/modules/groups';
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
	const [localExpenses, setLocalExpenses] = useState<
		ExpenseWithSenderAndShares[]
	>([]);

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

	const membersById = useMemo(() => {
		if (!group) return {};
		const allMembers = getAllGroupMembers(group);
		return allMembers.reduce((acc, member) => {
			acc[member.id] = member;
			return acc;
		}, {} as Record<string, User>);
	}, [group]);

	const messages = useMemo(() => {
		const remoteMessages =
			messagesQuery.data?.pages.flatMap((page) => {
				return page.messages;
			}) ?? [];
		return sortBy(
			[...remoteMessages, ...localMessages],
			(message) => -message.createdAt,
		);
	}, [localMessages, messagesQuery.data?.pages]);

	const expenses = useMemo(() => {
		const firstMessageCreated =
			messages[messages.length - 1]?.createdAt?.valueOf() ?? 0;
		const allExpenses = [...(remoteExpenses.data ?? []), ...localExpenses];
		const filteredExpenses = messagesQuery.hasNextPage
			? allExpenses.filter(
					(e) => e.createdAt.valueOf() >= firstMessageCreated,
			  )
			: allExpenses;
		return sortBy(filteredExpenses, (e) => -e.createdAt);
	}, [
		localExpenses,
		messages,
		messagesQuery.hasNextPage,
		remoteExpenses.data,
	]);

	const scrollToBottom = () => {
		setTimeout(() => {
			bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'auto' });
	}, []);

	if (!group) return <NotFoundPage />;

	return (
		<Page
			title={group.name}
			appBar={<GroupHeader group={group} />}
			footer={
				<GroupMessagesFooter
					group={group}
					onSendMessage={scrollToBottom}
				/>
			}
			wrapperProps={{
				overflow: 'hidden',
			}}
			contentProps={{
				display: 'flex',
				flexDirection: 'column-reverse',
				height: '100%',
				overflow: 'auto',
				overscrollBehavior: 'contain',
			}}
		>
			<Box height="1px" width="full" ref={bottomRef} />
			<ScrollDetector
				onChange={setScrolledDown}
				onChangeRef={scrolledDownRef}
				height="200px"
				initial={true}
			/>
			<AnimatePresence initial={false}>
				{!isScrolledDown && (
					<MotionBox
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						position="fixed"
						zIndex="10"
						bottom="82px"
						right="10px"
					>
						<ScrollDownButton onClick={scrollToBottom} />
					</MotionBox>
				)}
			</AnimatePresence>

			<GroupMessages
				messages={messages}
				expenses={expenses}
				membersById={membersById}
				hasLoadedAll={!messagesQuery.hasNextPage}
				isLoadingMore={messagesQuery.isFetchingNextPage}
				onLoadMore={messagesQuery.fetchNextPage}
				ownerId={group.ownerId}
				createdAt={group.createdAt}
			/>
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
