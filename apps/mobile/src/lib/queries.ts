import { QueryClient } from '@tanstack/react-query';

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
