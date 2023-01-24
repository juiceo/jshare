import React, { useState } from 'react';

import {
	Avatar,
	Box,
	Button,
	Card,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from '@chakra-ui/react';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import router from 'next/router';

import AppBar from '@/components/AppBar';
import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';
import Page from '@/components/Page';
import Redirect from '@/components/Redirect';
import { Routes } from '@/routing';
import { trpc } from '@/utils/trpc';

type FormState = {
	firstName: string;
	lastName: string;
	displayName: string;
};

type Props = {
	user: User;
};

const UserPage: React.FC<Props> = (props) => {
	const { user } = props;
	const updateUser = trpc.users.updateSelf.useMutation();

	const [formState, setFormState] = useState<FormState>({
		firstName: user.firstName ?? '',
		lastName: user.lastName ?? '',
		displayName: user.displayName ?? '',
	});

	const handleSubmit = async () => {
		await updateUser.mutate(formState);
		router.push('/');
	};

	return (
		<Page
			title="Edit profile"
			appBar={
				<AppBar
					heading="Edit profile"
					backTo={Routes.ROOT}
					variant="transparent"
				/>
			}
		>
			<Layout max="md">
				<Stack direction="column" alignItems="center" spacing={6}>
					<Avatar src={user?.image ?? ''} size="xl" />
					<Card background="white" width="100%">
						<FormControl p="4">
							<FormLabel fontSize="xs">First name</FormLabel>
							<Input
								type="text"
								placeholder="John"
								variant="filled"
								value={formState.firstName}
								onChange={(e) =>
									setFormState((prev) => ({
										...prev,
										firstName: e.target.value,
									}))
								}
							/>
						</FormControl>
						<Divider />

						<FormControl p="4">
							<FormLabel fontSize="xs">Last name</FormLabel>
							<Input
								type="text"
								placeholder="Doe"
								variant="filled"
								value={formState.lastName}
								onChange={(e) =>
									setFormState((prev) => ({
										...prev,
										lastName: e.target.value,
									}))
								}
							/>
						</FormControl>
						<Divider />
						<FormControl p="4">
							<FormLabel fontSize="xs">Display name</FormLabel>
							<Input
								type="text"
								placeholder="johndoe"
								variant="filled"
								value={formState.displayName}
								onChange={(e) =>
									setFormState((prev) => ({
										...prev,
										displayName: e.target.value,
									}))
								}
							/>
						</FormControl>
					</Card>
					<Box width="full">
						<Button
							colorScheme="green"
							width="full"
							onClick={handleSubmit}
							isLoading={updateUser.isLoading}
							disabled={updateUser.isLoading}
						>
							Save changes
						</Button>
						<Button
							colorScheme="red"
							width="full"
							variant="ghost"
							mt="2"
							onClick={() => {
								signOut();
								router.push('/');
							}}
						>
							Log out
						</Button>
					</Box>
				</Stack>
			</Layout>
		</Page>
	);
};

export const UserPageWrapper = () => {
	const user = trpc.users.getSelf.useQuery();
	if (user.isLoading) return <LoadingPage />;
	if (user.isError) return <Redirect to="/" />;

	return <UserPage user={user.data} />;
};

export default UserPageWrapper;
