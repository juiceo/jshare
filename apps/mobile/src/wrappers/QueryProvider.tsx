import { type PropsWithChildren } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import SuperJSON from 'superjson';

import { queryClient } from '~/lib/queries';

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
    serialize: (data) => SuperJSON.stringify(data),
    deserialize: (data) => SuperJSON.parse(data),
});

export const QueryProvider = (props: PropsWithChildren) => {
    return (
        <QueryClientProvider
            client={queryClient}
            // persistOptions={{ persister: asyncStoragePersister, maxAge: 1000 * 60 * 60 * 24 }}
        >
            {props.children}
        </QueryClientProvider>
    );
};
