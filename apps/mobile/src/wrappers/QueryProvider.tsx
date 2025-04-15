import { type PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import SuperJSON from 'superjson';

import { trpc, trpcHttpLink } from '~/lib/trpc';

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
    serialize: (data) => SuperJSON.stringify(data),
    deserialize: (data) => SuperJSON.parse(data),
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            networkMode: 'offlineFirst',
            refetchOnReconnect: 'always',
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

const trpcClient = trpc.createClient({
    links: [trpcHttpLink],
});

export const QueryProvider = (props: PropsWithChildren) => {
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister: asyncStoragePersister, maxAge: 1000 * 60 * 60 * 24 }}
        >
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
                {props.children}
            </trpc.Provider>
        </PersistQueryClientProvider>
    );
};
