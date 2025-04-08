import { useEffect, useState, type PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { trpc, trpcHttpLink } from '~/lib/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export const QueryProvider = (props: PropsWithChildren) => {
    const { session } = useSession();
    const accessToken = session?.access_token;
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        networkMode: 'offlineFirst',
                        refetchOnReconnect: 'always',
                    },
                },
            })
    );
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [trpcHttpLink],
        })
    );

    useEffect(() => {
        return () => {
            queryClient.clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
        </trpc.Provider>
    );
};
