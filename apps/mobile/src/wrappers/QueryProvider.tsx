import React, { useEffect, useState, type PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { trpc, trpcHttpLink } from '~/services/trpc';
import { useSession } from '~/wrappers/SessionProvider';

const API_BASE_URL = process.env.EXPO_PUBLIC_JSHARE_API_URL;

if (!API_BASE_URL) {
    throw new Error('Missing required environment variable: EXPO_PUBLIC_JSHARE_API_URL');
}

export const QueryProvider = (props: PropsWithChildren) => {
    const { session } = useSession();
    const accessToken = session?.access_token;
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [trpcHttpLink],
        })
    );

    useEffect(() => {
        queryClient.clear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
        </trpc.Provider>
    );
};
