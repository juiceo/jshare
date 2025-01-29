import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import Constants from 'expo-constants';
import superjson from 'superjson';

import type { AppRouter } from '@jshare/server';

import { getAccessToken } from '~/state/auth';

const apiBaseUrl = Constants.expoConfig?.extra?.jshareApiUrl;
if (!apiBaseUrl) {
    throw new Error('Missing "jshareApiUrl" config variable');
}

export type TrpcInputs = inferRouterInputs<AppRouter>;
export type TrpcOutputs = inferRouterOutputs<AppRouter>;

export const TRPC_API_URL = `${apiBaseUrl}/trpc`;

export const trpc = createTRPCReact<AppRouter>();

export const trpcHttpLink = httpBatchLink({
    url: `${apiBaseUrl}/trpc`,
    async headers() {
        return {
            authorization: getAccessToken(),
        };
    },
    transformer: superjson,
});

export const trpcUniversal = createTRPCClient<AppRouter>({
    links: [trpcHttpLink],
});
