import React from 'react';

import {
	Box,
	Button,
	Card,
	FormControl,
	FormLabel,
	Input,
	Select,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import router from 'next/router';
import { RiQuestionLine } from 'react-icons/ri';

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
							placeholder="Boys trip to Berlin"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Input>
					</FormControl>
					<FormControl mb="4">
						<FormLabel
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							Currency
							<Tooltip label="The currency expenses will be added and calculated in. Support for multiple currencies per group coming soon!">
								<Box
									ml="2"
									display="inline-flex"
									alignItems="center"
									justifyContent="center"
								>
									<RiQuestionLine />
								</Box>
							</Tooltip>
						</FormLabel>
						<Select placeholder="Select currency">
							<option value="option1">EUR</option>
							<option value="option2">USD</option>
						</Select>
						<Text fontSize="xs" mt="1">
							More currencies coming soon!
						</Text>
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
