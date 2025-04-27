import { type PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '~/lib/trpc';

export const QueryProvider = (props: PropsWithChildren) => {
    return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
