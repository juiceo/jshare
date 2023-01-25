import React from 'react';

import {
	CircularProgress,
	Heading,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react';
import { sumBy } from 'lodash';
import { useRouter } from 'next/router';

import AppBar from '@/components/AppBar';
import BalanceList from '@/components/BalanceList';
import ExpenseList from '@/components/ExpenseList';
import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';
import Page from '@/components/Page';
import { formatAmount } from '@/modules/money';
import { Routes } from '@/routing';
import { OverviewTabId } from '@/routing/types';
import { GroupWithMembers } from '@/schemas';
import { getAllGroupMembers } from '@/utils/groups';
import { trpc } from '@/utils/trpc';

interface Props {
	group: GroupWithMembers;
}

const OverviewTabs: Record<OverviewTabId, number> = {
	balances: 0,
	expenses: 1,
	payments: 2,
};

const OverviewPage = (props: Props) => {
	const { group } = props;

	const router = useRouter();
	const { tabId } = router.query as { tabId: OverviewTabId };

	const members = getAllGroupMembers(group);
	const expenses = trpc.expenses.getByGroupId.useQuery(group.id);

	const total = sumBy(expenses.data ?? [], (expense) => {
		return expense.amount;
	});

	const tabIndex = OverviewTabs[tabId];

	const handleTabChange = (index: number) => {
		const tabId = Object.entries(OverviewTabs).find(
			([key, value]) => value === index,
		)?.[0];

		if (tabId) {
			router.replace(
				Routes.OverviewTab(group.id, tabId as OverviewTabId),
			);
		}
	};

	return (
		<Page
			title={`Overview - ${group.name}`}
			appBar={
				<AppBar
					heading="Overview"
					subheading={group.name}
					backTo={Routes.Group(group.id)}
				/>
			}
		>
			<Layout max="lg" noMargin>
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing="8"
					p="8"
				>
					<Stack direction="column" alignItems="center">
						{expenses.isLoading ? (
							<CircularProgress
								isIndeterminate
								color="green.300"
							/>
						) : (
							<Heading fontSize="3xl">
								{formatAmount(total, group.currency)}
							</Heading>
						)}
						<Text fontSize="xs">Total</Text>
					</Stack>
				</Stack>
				<Tabs
					index={tabIndex}
					onChange={handleTabChange}
					isLazy
					isFitted
					align="center"
				>
					<TabList>
						<Tab>Balances</Tab>
						<Tab>Expenses</Tab>
						<Tab>Payments</Tab>
					</TabList>
					<TabPanels>
						<TabPanel px="0">
							<BalanceList
								currency={group.currency}
								members={members}
								expenses={expenses.data ?? []}
							/>
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
		</Page>
	);
};

const OverviewPageWrapper = () => {
	const router = useRouter();
	const { groupId } = router.query as { groupId: string };

	const group = trpc.groups.getByGroupId.useQuery(groupId);

	if (group.isLoading) return <LoadingPage />;
	if (group.isError) return <Text>Something went wrong...</Text>;

	return <OverviewPage group={group.data} />;
};

export default OverviewPageWrapper;
