import React from 'react';

import { createServerSideHelpers } from '@trpc/react-query/server';
import { GetServerSidePropsContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import superjson from 'superjson';

import Groups from '@/components/Groups';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import LoadingPage from '@/components/LoadingPage';
import Page from '@/components/Page';
import { createContextInner } from '@/server/context';
import { appRouter } from '@/server/routers/_app';

import Layout from '../components/Layout';

const Root: React.FC = () => {
	const { status } = useSession();

	switch (status) {
		case 'loading':
			return <LoadingPage />;
		case 'unauthenticated':
			return <LandingPage />;
		case 'authenticated':
			return (
				<Page appBar={<Header />}>
					<Layout>
						<Groups />
					</Layout>
				</Page>
			);
	}
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const session = await getSession(ctx);
	const ssg = createServerSideHelpers({
		router: appRouter,
		ctx: await createContextInner({ session }),
		transformer: superjson,
	});

	await ssg.groups.listOwnGroups.prefetch();

	return {
		props: {
			trpcState: ssg.dehydrate(),
			session,
		},
	};
};

export default Root;
