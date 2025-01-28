import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';

import type { AppRouter } from '@jshare/server';

import { getAccessToken } from '~/state/auth';

const apiBaseUrl = process.env.JSHARE_API_URL;
if (!apiBaseUrl) {
    throw new Error('Missing JSHARE_API_URL env variable');
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
