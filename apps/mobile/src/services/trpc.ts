import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';

import { getEnv } from '@jshare/common';
import type { AppRouter } from '@jshare/server';

import { getAccessToken } from '~/state/auth';

const apiBaseUrl = getEnv('JSHARE_API_URL', { required: true });

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
