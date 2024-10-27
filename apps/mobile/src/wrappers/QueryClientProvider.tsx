import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';

import { contract } from '@jshare/api-contract';

const queryClient = new QueryClient();

const tsr = initTsrReactQuery(contract, {
    baseUrl: 'http://localhost:3333',
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <tsr.ReactQueryProvider>{children}</tsr.ReactQueryProvider>
        </QueryClientProvider>
    );
}
