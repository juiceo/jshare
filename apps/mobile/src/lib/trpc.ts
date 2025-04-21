import { QueryClient, type QueryKey } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import Constants from 'expo-constants';
import superjson from 'superjson';

import type { DB } from '@jshare/db';
import { type AppRouter } from '@jshare/server';

import { getAccessToken } from '~/state/auth';

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
            authorization: getAccessToken(),
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

const optimisticUpdateQueries = <T extends { id: string }>(
    queryKey: QueryKey,
    id: string,
    updates: Partial<T>
) => {
    queryClient.setQueriesData(
        {
            queryKey,
        },
        (prev: T | T[] | undefined) => {
            if (Array.isArray(prev)) {
                return prev.map((item) => {
                    if (item.id === id) {
                        return { ...item, ...updates };
                    }
                    return item;
                });
            } else if (prev?.id === id) {
                return { ...prev, ...updates };
            }
            return prev;
        }
    );
};

/**
 * DEFAULT OPTIONS SETUP
 */

queryClient.setMutationDefaults<
    TrpcOutputs['z']['profile']['update'],
    Error,
    TrpcInputs['z']['profile']['update']
>(trpc.z.profile.update.mutationKey(), {
    onMutate: (variables) => {
        const id = variables.where.id;
        if (!id || Object.keys(variables.where).length !== 1) return;
        optimisticUpdateQueries(
            trpc.z.profile.pathKey(),
            id,
            variables.data as Partial<DB.Profile>
        );
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: trpc.z.profile.pathKey(),
        });
    },
});

queryClient.setMutationDefaults<
    TrpcOutputs['z']['group']['update'],
    Error,
    TrpcInputs['z']['group']['update']
>(trpc.z.group.update.mutationKey(), {
    onMutate: (variables) => {
        const id = variables.where.id;
        if (!id || Object.keys(variables.where).length !== 1) return;
        optimisticUpdateQueries(trpc.z.group.pathKey(), id, variables.data as Partial<DB.Group>);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: trpc.z.group.pathKey(),
        });
    },
});

queryClient.setMutationDefaults(trpc.z.group.create.mutationKey(), {
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: trpc.z.group.pathKey(),
        });
    },
});

queryClient.setMutationDefaults(trpc.expenses.pathKey(), {
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: trpc.expenses.pathKey(),
        });
        queryClient.invalidateQueries({
            queryKey: trpc.balances.pathKey(),
        });
    },
});

queryClient.setMutationDefaults(trpc.payments.pathKey(), {
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: trpc.payments.pathKey(),
        });
        queryClient.invalidateQueries({
            queryKey: trpc.balances.pathKey(),
        });
    },
});
