import { Suspense } from 'react';

import { LoadingState } from '~/components/util/LoadingState';

export const withSuspense = (Component: any, message?: string) => {
    return function SuspenseWrapper() {
        return (
            <Suspense fallback={<LoadingState message={message} />}>
                <Component />
            </Suspense>
        );
    };
};
