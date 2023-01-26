/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

import nextPWA from 'next-pwa';

const withPWA = nextPWA({
	dest: 'public',
	disabled: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
	experimental: {
		swcPlugins: [['next-superjson-plugin', {}]],
	},
	serverRuntimeConfig: {
		// Will only be available on the server side
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		APP_URL: process.env.APP_URL,
		WS_URL: process.env.WS_URL,
	},
});
