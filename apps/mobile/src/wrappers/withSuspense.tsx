import { Suspense } from 'react';

export const withSuspense = <TProps extends any>(
    Component: React.ComponentType<TProps>,
    fallback?: React.ReactNode
) => {
    return function SuspenseWrapper(props: TProps) {
        return (
            <Suspense fallback={fallback}>
                <Component {...(props as any)} />
            </Suspense>
        );
    };
};
