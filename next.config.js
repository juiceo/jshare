const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
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
	compiler: {
		styledComponents: true,
	},
});
