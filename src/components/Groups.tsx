import React from 'react';

import {
	Box,
	Button,
	CircularProgress,
	Heading,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Routes } from '@/routing';
import { trpc } from '@/services/trpc';

import GroupCard from './GroupCard';

const Groups = () => {
	const groupsQuery = trpc.groups.getByUserId.useQuery();

	const renderContent = () => {
		if (!!groupsQuery.isLoading) return null;
		if (!!groupsQuery.isError) {
			return <Text>Something went wrong...</Text>;
		}

		if (!!groupsQuery.data?.length) {
			return (
				<SimpleGrid columns={[1, 2, 3]} spacing={4}>
					{groupsQuery.data.map((group) => (
						<GroupCard
							group={group}
							key={group.id}
							onArchive={() => groupsQuery.refetch()}
						/>
					))}
				</SimpleGrid>
			);
		} else {
			return <NoGroups />;
		}
	};

	return (
		<Box>
			<Stack direction="row" justifyContent="space-between" mb="6">
				<Heading fontSize="xl" mb="2">
					Your groups{' '}
					{!!groupsQuery.isLoading && (
						<CircularProgress
							isIndeterminate
							color="green.300"
							size={6}
							sx={{ ml: 2 }}
						/>
					)}
				</Heading>
				<Link href={Routes.CREATE_GROUP}>
					<Button colorScheme="green">New group</Button>
				</Link>
			</Stack>
			{renderContent()}
		</Box>
	);
};

const NoGroups = () => (
	<Box
		width="full"
		background="white"
		p="4"
		borderRadius="md"
		display="flex"
		alignItems="center"
		justifyContent="center"
		flexDirection="column"
		minHeight="200"
	>
		<Text fontSize="xl" mb="1">
			You have no groups
		</Text>
		<Text fontSize="md" mb="6">
			Create a group to track your expenses
		</Text>
		<Link href={Routes.CREATE_GROUP}>
			<Button colorScheme="green">New group</Button>
		</Link>
	</Box>
);

export default Groups;
