import React from 'react';

import { Button, Stack, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

import logo from '@/assets/brand/jshare_logo_with_name.svg';

import Layout from './Layout';
import Page from './Page';

const LandingPage = () => {
	return (
		<Page
			wrapperProps={{ background: '#FFF8F8' }}
			footer={
				<Layout noMargin max="md" p="4" background="#fff8f8">
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
			<Layout max="md" background="#fff8f8">
				<Stack direction="column" alignItems="center">
					<Image src={logo} alt="JShare" width="300" />
					<Text textAlign="center">
						Welcome!
						<br />
						<br />
						JShare is an expense sharing app that was built as a
						hobby project to replace the discontinued WeShare. It
						helps your group of friends to easily keep track of who
						paid for what, and crunches the numbers for you when its
						time to settle the debt.
						<br />
						<br />
						Log in to give it a try!
					</Text>
				</Stack>
			</Layout>
		</Page>
	);
};

export default LandingPage;
