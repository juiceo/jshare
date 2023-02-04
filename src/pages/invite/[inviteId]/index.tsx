import React from 'react';

import { Button, Card, Stack, Text } from '@chakra-ui/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { isUserInGroup } from '@/modules/groups';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Routes } from '@/routing';
import { GroupWithMembers } from '@/schemas';
import { appRouter } from '@/server/routers/_app';
import { trpc } from '@/services/trpc';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const InvitePage = (props: Props) => {
	const { group } = props;
	const { data: session } = useSession();
	const router = useRouter();

	const joinGroup = trpc.groups.joinGroupWithInviteId.useMutation();

	const handleJoin = async () => {
		if (!group.inviteId) return;
		await joinGroup.mutateAsync({ inviteId: group.inviteId });

		router.push(Routes.Group(group.id));
	};

	const isAlreadyInGroup = !!session && isUserInGroup(session.userId, group);

	return (
		<Page
			title={`Join ${group.name}`}
			description={`Join ${group.name} on JShare and start sharing your expenses now`}
		>
			<Layout max="md">
				<Card background="white" p="4">
					<Text align="center" fontSize="2xl" mb="8">
						{group.name}
					</Text>

					{!!isAlreadyInGroup ? (
						<Stack direction="column" alignItems="center">
							<Text>You are already a member</Text>
							<Link href={Routes.Group(group.id)}>
								<Button>Go to group</Button>
							</Link>
						</Stack>
					) : !!session?.user ? (
						<Button colorScheme="green" onClick={() => handleJoin()} isLoading={joinGroup.isLoading}>
							Join group
						</Button>
					) : (
						<Button colorScheme="green" onClick={() => signIn()}>
							Log in to join
						</Button>
					)}
				</Card>
			</Layout>
		</Page>
	);
};

export const InvitePageWrapper = (props: Props) => {
	if (!props.group) return null;
	return <InvitePage {...props} />;
};

export const getServerSideProps: GetServerSideProps<{ group: GroupWithMembers }, { inviteId: string }> = async (
	ctx,
) => {
	try {
		const { inviteId } = ctx.params ?? {};
		if (!inviteId) {
			return {
				notFound: true,
			};
		}
		const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
		const group = await appRouter.createCaller({ session }).groups.getByInviteId({ inviteId });

		return {
			props: {
				group,
			},
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export default InvitePageWrapper;
