import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	colors: {
		theme: {
			pageBackground: '#fafafa',
		},
	},
	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
	styles: {
		global: {
			'html, body': {
				background: 'theme.pageBackground',
			},
		},
	},
});

export default theme;
