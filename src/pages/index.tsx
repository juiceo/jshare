import React from 'react';

import { Button, Stack, Text } from '@chakra-ui/react';
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
			<Page wrapperProps={{ background: '#FFF8F8' }}>
				<Layout max="md">
					<Stack direction="column" alignItems="center">
						<Image src={logo} alt="JShare" width="300" />
						<Text textAlign="center">
							JShare makes splitting expenses as easy as splitting
							a pizza. Sign in to get started.
						</Text>
						<Button
							mt="4"
							colorScheme="green"
							variant="solid"
							onClick={() => signIn()}
							maxWidth="300px"
							width="100%"
							alignSelf="center"
						>
							Sign in
						</Button>
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
