import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { AppProviders } from 'next-auth/providers';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/server/prisma';

const {
	GOOGLE_OAUTH_CLIENT_ID,
	GOOGLE_OAUTH_CLIENT_SECRET,
	GITHUB_OAUTH_CLIENT_ID,
	GITHUB_OAUTH_CLIENT_SECRET,
} = process.env;

const providers: AppProviders = [];

if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET) {
	throw new Error(
		'GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET must be set',
	);
}

if (!GITHUB_OAUTH_CLIENT_ID || !GITHUB_OAUTH_CLIENT_SECRET) {
	throw new Error(
		'GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET must be set',
	);
}

providers.push(
	GoogleProvider({
		clientId: GOOGLE_OAUTH_CLIENT_ID,
		clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
		profile: (profile) => {
			return {
				id: profile.sub,
				name: profile.name,
				firstName: profile.given_name,
				lastName: profile.family_name,
				email: profile.email,
				image: profile.picture,
			};
		},
	}),
	GitHubProvider({
		clientId: GITHUB_OAUTH_CLIENT_ID,
		clientSecret: GITHUB_OAUTH_CLIENT_SECRET,
		profile: (profile) => {
			return {
				id: profile.node_id,
				name: profile.name,
				firstName: profile.name?.split(' ')[0] ?? '',
				lastName: profile.name?.split(' ')[1] ?? '',
				email: profile.email,
				image: profile.avatar_url,
			};
		},
	}),
);

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers,
	adapter: PrismaAdapter(prisma),
	theme: {
		colorScheme: 'light',
		brandColor: '#00ff00',
	},
	callbacks: {
		session({ session, user }: any) {
			return {
				userId: user?.id,
				...session,
			};
		},
	},
};

export default NextAuth(authOptions);
