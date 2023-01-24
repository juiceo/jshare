import React from 'react';

import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

import logo from '@/assets/brand/jshare_logo_circle.svg';

import Layout from './Layout';
import SignedInUser from './SignedInUser';

const Header: React.FC = () => {
	const { data: session, status } = useSession();
	return (
		<Layout noMargin background="white" boxShadow="sm">
			<Box w="full" py="4" margin="0 auto">
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Stack direction="row" alignItems="center">
						<Image src={logo} alt={'JShare'} width={50} />
						<Heading fontSize="2xl">JShare</Heading>
					</Stack>
					{status === 'unauthenticated' && (
						<Button colorScheme="green" onClick={() => signIn()}>
							Sign in
						</Button>
					)}
					{status === 'authenticated' && (
						<SignedInUser session={session} />
					)}
				</Stack>
			</Box>
		</Layout>
	);
};

export default Header;
