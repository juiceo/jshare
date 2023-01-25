import React from 'react';

import { Button, Link, Stack, Text } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

import logo from '@/assets/brand/jshare_logo_with_name.svg';
import Groups from '@/components/Groups';
import Header from '@/components/Header';
import LoadingPage from '@/components/LoadingPage';
import Page from '@/components/Page';

import Layout from '../components/Layout';

const Root: React.FC = () => {
	const { status } = useSession();

	if (status === 'loading') return <LoadingPage />;
	if (status === 'unauthenticated') {
		return (
			<Page
				wrapperProps={{ background: '#FFF8F8' }}
				footer={
					<Layout noMargin max="md" p="4">
						<Button
							mt="4"
							colorScheme="green"
							variant="solid"
							onClick={() => signIn()}
							width="full"
							alignSelf="center"
						>
							Sign in
						</Button>
					</Layout>
				}
			>
				<Layout max="md">
					<Stack direction="column" alignItems="center">
						<Image src={logo} alt="JShare" width="300" />
						<Text textAlign="center">
							Welcome!
							<br />
							<br />
							JShare is an expense sharing app that was built as a
							hobby project to replace the discontinued WeShare.
							It helps your group of friends to easily keep track
							of who paid for what, and crunches the numbers for
							you when its time to settle the debt.
							<br />
							<br />
							Log in to give it a try!
						</Text>
					</Stack>
				</Layout>
			</Page>
		);
	}

	return (
		<Page appBar={<Header />}>
			<Layout>
				<Groups />
			</Layout>
		</Page>
	);
};

export default Root;
