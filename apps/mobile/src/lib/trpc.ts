import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { createTRPCContext, createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import Constants from 'expo-constants';
import superjson from 'superjson';

import { type AppRouter } from '@jshare/server';

import { queryClient } from '~/lib/queries';
import { getAccessToken } from '~/state/auth';

const apiBaseUrl = Constants.expoConfig?.extra?.jshareApiUrl;
if (!apiBaseUrl) {
    throw new Error('Missing "jshareApiUrl" config variable');
}

export type TrpcInputs = inferRouterInputs<AppRouter>;
export type TrpcOutputs = inferRouterOutputs<AppRouter>;

export const TRPC_API_URL = `${apiBaseUrl}/trpc`;

export const trpcHttpLink = httpBatchLink({
    url: `${apiBaseUrl}/trpc`,
    async headers() {
        return {
            authorization: getAccessToken(),
        };
    },
    transformer: superjson,
});

const trpcClient = createTRPCClient<AppRouter>({
    links: [trpcHttpLink],
});

export const trpcUniversal = trpcClient;

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

export const trpcUtils = createTRPCOptionsProxy<AppRouter>({
    client: trpcClient,
    queryClient,
});
