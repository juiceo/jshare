import React from 'react';

import {
	Button,
	Card,
	FormControl,
	FormLabel,
	Input,
	Text,
} from '@chakra-ui/react';
import router from 'next/router';

import AppBar from '@/components/AppBar';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { Routes } from '@/routing';
import { trpc } from '@/utils/trpc';

const CreateGroup: React.FC = () => {
	const [name, setName] = React.useState('');

	const createGroup = trpc.groups.create.useMutation();

	const handleCreateGroup = async () => {
		const group = await createGroup.mutateAsync({ name, currency: 'EUR' });
		router.push(Routes.Group(group.id));
	};

	return (
		<Page
			appBar={
				<AppBar
					heading="New group"
					backTo={Routes.ROOT}
					variant="transparent"
				/>
			}
			title="New group"
		>
			<Layout max="md">
				<Card background="white" p="4">
					<FormControl mb="4">
						<FormLabel>Name</FormLabel>
						<Input
							variant="filled"
							placeholder="Boys trip to Berlin"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Input>
					</FormControl>
					<Button
						colorScheme="green"
						isLoading={createGroup.isLoading}
						disabled={!createGroup.isIdle}
						onClick={handleCreateGroup}
					>
						Create
					</Button>
				</Card>
				{createGroup.error && <Text>Something went wrong!</Text>}
			</Layout>
		</Page>
	);
};

export default CreateGroup;
