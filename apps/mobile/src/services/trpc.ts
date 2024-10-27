import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '@jshare/server';

import { getAccessToken } from '~/state/auth';

const API_BASE_URL = process.env.EXPO_PUBLIC_JSHARE_API_URL;

if (!API_BASE_URL) {
    throw new Error('Missing required environment variable: EXPO_PUBLIC_JSHARE_API_URL');
}

export const TRPC_API_URL = `${API_BASE_URL}/trpc`;

export const trpc = createTRPCReact<AppRouter>();

export const trpcHttpLink = httpBatchLink({
    url: `${API_BASE_URL}/trpc`,
    async headers() {
        return {
            authorization: getAccessToken(),
        };
    },
});

export const trpcUniversal = createTRPCClient<AppRouter>({
    links: [trpcHttpLink],
});
