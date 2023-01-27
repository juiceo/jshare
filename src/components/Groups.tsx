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

import EmptyCard from './EmptyCard';
import GroupCard from './GroupCard';

const Groups = () => {
	const groups = trpc.groups.listOwnGroups.useQuery();

	const renderContent = () => {
		if (!!groups.isLoading) return null;
		if (!!groups.isError) {
			return <Text>Something went wrong...</Text>;
		}

		if (!!groups.data?.length) {
			return (
				<SimpleGrid columns={[1, 2, 3]} spacing={4}>
					{groups.data.map((group) => (
						<GroupCard group={group} key={group.id} />
					))}
				</SimpleGrid>
			);
		} else {
			return (
				<EmptyCard
					title="You have no groups"
					description="Create a group to track your expenses"
					link={{
						href: Routes.CREATE_GROUP,
						label: 'New group',
					}}
				/>
			);
		}
	};

	return (
		<Box>
			<Stack direction="row" justifyContent="space-between" mb="6">
				<Heading fontSize="xl" mb="2">
					Your groups{' '}
					{!!groups.isLoading && (
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

export default Groups;
