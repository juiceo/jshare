import '../global.css';
import '@fontsource/poppins/300.css';
import '@fontsource/open-sans/400.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { Session } from 'next-auth';
import { SessionProvider, getSession } from 'next-auth/react';
import type { AppType } from 'next/app';

import { trpc } from '@/utils/trpc';

const theme = extendTheme({
	colors: {
		theme: {
			pageBackground: '#fafafa',
		},
	},
	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Open Sans', sans-serif`,
	},
	styles: {
		global: {
			'html, body': {
				background: 'theme.pageBackground',
			},
		},
	},
});

const App: AppType<{ session: Session | null }> = ({
	Component,
	pageProps,
}) => {
	return (
		<ChakraProvider theme={theme}>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
};

App.getInitialProps = async ({ ctx }) => {
	return {
		session: await getSession(ctx),
	};
};

export default trpc.withTRPC(App);
