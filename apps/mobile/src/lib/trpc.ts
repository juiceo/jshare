import { QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import Constants from 'expo-constants';
import superjson from 'superjson';

import { type AppRouter } from '@jshare/server';

import { SessionStore } from '~/lib/store/SessionStore';

const apiBaseUrl = Constants.expoConfig?.extra?.jshareApiUrl;
if (!apiBaseUrl) {
    throw new Error('Missing "jshareApiUrl" config variable');
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            networkMode: 'online',
            refetchOnReconnect: 'always',
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

export type TrpcInputs = inferRouterInputs<AppRouter>;
export type TrpcOutputs = inferRouterOutputs<AppRouter>;

export const TRPC_API_URL = `${apiBaseUrl}/trpc`;

export const trpcHttpLink = httpBatchLink({
    url: `${apiBaseUrl}/trpc`,
    async headers() {
        return {
            authorization: SessionStore.sessionMaybe?.access_token,
        };
    },
    transformer: superjson,
});

export const trpcClient = createTRPCClient<AppRouter>({
    links: [trpcHttpLink],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
    client: trpcClient,
    queryClient,
});
