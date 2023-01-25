import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Page from '@/components/Page';

export default function Custom404() {
	const router = useRouter();
	return (
		<Page>
			<Layout max="md">
				<Stack direction="column">
					<Heading textAlign="center">404 Not found</Heading>
					<Text textAlign="center">
						Looks like there's nothing here... Are you sure you
						typed the link correctly?
					</Text>
					<Button onClick={() => router.back()}>Go back</Button>
				</Stack>
			</Layout>
		</Page>
	);
}
