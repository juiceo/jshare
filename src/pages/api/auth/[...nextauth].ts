import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { AppProviders } from 'next-auth/providers';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/server/prisma';

const {
	GOOGLE_OAUTH_CLIENT_ID,
	GOOGLE_OAUTH_CLIENT_SECRET,
	GITHUB_OAUTH_CLIENT_ID,
	GITHUB_OAUTH_CLIENT_SECRET,
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
} = process.env;

const providers: AppProviders = [];

if (!!GOOGLE_OAUTH_CLIENT_ID && !!GOOGLE_OAUTH_CLIENT_SECRET) {
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
	);
}

if (!!FACEBOOK_CLIENT_ID && !!FACEBOOK_CLIENT_SECRET) {
	providers.push(
		FacebookProvider({
			clientId: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET,
			profile: (profile) => {
				return {
					id: profile.id,
					name: 'Juuso Lappalainen',
					firstName: profile.name?.split(' ')[0] ?? '',
					lastName: profile.name?.split(' ')[1] ?? '',
					email: profile.email,
					image: profile.picture?.data?.url,
				};
			},
		}),
	);
}

if (!!GITHUB_OAUTH_CLIENT_ID && !!GITHUB_OAUTH_CLIENT_SECRET) {
	providers.push(
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
}

if (providers.length === 0) {
	throw new Error(
		'Environment variables for at least one login provider must be configured.',
	);
}

export const authOptions: NextAuthOptions = {
	providers,
	adapter: PrismaAdapter(prisma),
	theme: {
		colorScheme: 'light',
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
