import React, { useState } from 'react';

import { Avatar, Box, Button, Card, Divider, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getSession, signOut } from 'next-auth/react';
import router from 'next/router';
import superjson from 'superjson';

import AppBar from '@/components/AppBar';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import Redirect from '@/components/Redirect';
import { Routes } from '@/routing';
import { createContextInner } from '@/server/context';
import { appRouter } from '@/server/routers/_app';
import { trpc } from '@/services/trpc';

type FormState = {
	firstName: string;
	lastName: string;
	email: string;
};

const UserPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { userId } = props.session;
	const userQuery = trpc.users.getById.useQuery({ userId });
	const updateUser = trpc.users.update.useMutation();
	const user = userQuery.data;

	const [formState, setFormState] = useState<FormState>({
		firstName: user?.firstName ?? '',
		lastName: user?.lastName ?? '',
		email: user?.email ?? '',
	});

	const handleSubmit = async () => {
		await updateUser.mutate({
			userId,
			...formState,
		});
		router.push('/');
	};

	if (!user) {
		return <Redirect to={Routes.ROOT} />;
	}

	return (
		<Page title="Edit profile" appBar={<AppBar heading="Edit profile" backTo={Routes.ROOT} />}>
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
							<FormLabel fontSize="xs">Email</FormLabel>
							<Input
								type="text"
								placeholder="email@example.com"
								variant="filled"
								value={formState.email}
								onChange={(e) =>
									setFormState((prev) => ({
										...prev,
										email: e.target.value,
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const session = await getSession(ctx);
	const ssg = createProxySSGHelpers({
		router: appRouter,
		ctx: await createContextInner({ session }),
		transformer: superjson,
	});

	if (!session) {
		return {
			notFound: true,
		};
	}

	await ssg.users.getById.prefetch({ userId: session.userId });

	return {
		props: {
			trpcState: ssg.dehydrate(),
			session,
		},
	};
};

export default UserPage;
