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
							JShare is an{' '}
							<Link
								href="https://github.com/juiceo/jshare"
								color="teal.500"
							>
								open source hobby project
							</Link>{' '}
							to try and replace the void left by the discontinued
							WeShare app. Please note that JShare is still in a
							very early stage of development, so things may break
							and/or change on you unexpectedly.
							<br />
							<br />
							Hope you enjoy it!
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
