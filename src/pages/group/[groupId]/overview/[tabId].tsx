import React, { useMemo, useState } from 'react';

import { Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { sumBy } from 'lodash';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import AmountWithLabel from '@/components/AmountWithLabel';
import AppBar from '@/components/AppBar';
import BalanceList from '@/components/BalanceList';
import ExpenseList from '@/components/ExpenseList';
import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';
import Page from '@/components/Page';
import PaymentModal from '@/components/PaymentModal';
import { byId } from '@/modules/common/utils';
import { EMPTY_EXPENSE_SUMMARY, getExpenseSummaryByMember } from '@/modules/expenses';
import { getAllGroupMembers } from '@/modules/groups';
import { GroupWithMembers } from '@/modules/groups/types';
import { formatAmount } from '@/modules/money';
import { Routes } from '@/routing';
import { OverviewTabId } from '@/routing/types';
import { trpc } from '@/services/trpc';

interface Props {
	group: GroupWithMembers;
	userId: string;
}

const OverviewTabs: Record<OverviewTabId, number> = {
	balances: 0,
	expenses: 1,
	payments: 2,
};

const OverviewPage = (props: Props) => {
	const { group, userId } = props;

	const router = useRouter();
	const { tabId } = router.query as { tabId: OverviewTabId };
	const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);

	const members = getAllGroupMembers(group);
	const membersById = byId(members);
	const expenses = trpc.expenses.listByGroupId.useQuery({ groupId: group.id });
	const total = sumBy(expenses.data ?? [], (expense) => {
		return expense.amount;
	});

	const summaryByMember = useMemo(() => {
		return getExpenseSummaryByMember(expenses.data ?? []);
	}, [expenses.data]);

	const ownSummary = summaryByMember[userId] ?? EMPTY_EXPENSE_SUMMARY;

	const tabIndex = OverviewTabs[tabId];

	const handleTabChange = (index: number) => {
		const tabId = Object.entries(OverviewTabs).find(([key, value]) => value === index)?.[0];

		if (tabId) {
			router.replace(Routes.OverviewTab(group.id, tabId as OverviewTabId));
		}
	};

	return (
		<Page
			title={`Overview - ${group.name}`}
			appBar={<AppBar heading="Overview" subheading={group.name} backTo={Routes.Group(group.id)} />}
			footer={
				<Layout max="lg" noMargin py="2">
					{ownSummary.balance >= 0 ? (
						<Button
							width="100%"
							colorScheme="green"
							borderRadius="2xl"
							onClick={() => setPaymentModalOpen(true)}
						>
							You will receive {formatAmount(ownSummary.balance, group.currency)}
						</Button>
					) : (
						<Button
							width="100%"
							colorScheme="green"
							borderRadius="2xl"
							onClick={() => setPaymentModalOpen(true)}
						>
							Pay your share {formatAmount(Math.abs(ownSummary.balance), group.currency)}
						</Button>
					)}
				</Layout>
			}
		>
			<Layout max="lg" noMargin>
				<Stack direction="row" justifyContent="center" alignItems="center" spacing="8" p="8">
					<AmountWithLabel
						loading={expenses.isLoading}
						label="Total"
						amount={total}
						currency={group.currency}
					/>
				</Stack>
				<Tabs index={tabIndex} onChange={handleTabChange} isLazy isFitted align="center">
					<TabList>
						<Tab>Balances</Tab>
						<Tab>Expenses</Tab>
						<Tab>Payments</Tab>
					</TabList>
					<TabPanels>
						<TabPanel px="0">
							<BalanceList currency={group.currency} members={members} summaries={summaryByMember} />
						</TabPanel>
						<TabPanel px="0">
							<ExpenseList expenses={expenses.data ?? []} />
						</TabPanel>
						<TabPanel px="0">
							<Text fontSize="xl">Coming soon :)</Text>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Layout>
			<PaymentModal
				isOpen={paymentModalOpen}
				onClose={() => setPaymentModalOpen(false)}
				balances={summaryByMember}
				currency={group.currency}
				userId={userId}
				usersById={membersById}
			/>
		</Page>
	);
};

const OverviewPageWrapper = () => {
	const router = useRouter();
	const session = useSession();
	const { groupId } = router.query as { groupId: string };

	const group = trpc.groups.getById.useQuery({ groupId });

	if (group.isLoading) return <LoadingPage />;
	if (session.status !== 'authenticated') return <LoadingPage />;
	if (group.isError) return <Text>Something went wrong...</Text>;

	return <OverviewPage group={group.data} userId={session.data.userId} />;
};

export default OverviewPageWrapper;
