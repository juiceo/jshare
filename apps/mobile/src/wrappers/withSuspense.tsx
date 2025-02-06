import React, { Suspense } from 'react';

import { ErrorBoundary } from '~/components/errors/ErrorBoundary';

export const withSuspense = <TProps extends any>(
    Component: React.ComponentType<TProps>,
    args?: {
        loader?: React.ReactNode;
        fallback?: React.ReactNode;
    }
) => {
    return function SuspenseWrapper(props: TProps) {
        return (
            <ErrorBoundary fallback={() => <>{args?.fallback}</>}>
                <Suspense fallback={args?.loader}>
                    <Component {...(props as any)} />
                </Suspense>
            </ErrorBoundary>
        );
    };
};
