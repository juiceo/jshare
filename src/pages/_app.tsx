import '../global.css';
import '@fontsource/poppins/300.css';
import '@fontsource/open-sans/400.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';
import Head from 'next/head';

import useHideSnapshot from '@/hooks/useHideSnapshot';
import { trpc } from '@/services/trpc';

import theme from '../lib/theme';

const App: AppType<{ session: Session | null }> = ({
	Component,
	pageProps,
}) => {
	useHideSnapshot();
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
				/>
			</Head>
			<SessionProvider session={pageProps.session}>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</SessionProvider>
		</>
	);
};

// App.getInitialProps = async ({ ctx }) => {
// 	return {
// 		session: await getSession(ctx),
// 	};
// };

export default trpc.withTRPC(App);
