import { Suspense, type ComponentType } from 'react';

import { LoadingState } from '~/components/util/LoadingState';

export const screen = (
    Component: ComponentType,
    args?: {
        loadingMessage?: string;
    }
) => {
    return function SuspenseWrapper() {
        return (
            <Suspense fallback={<LoadingState message={args?.loadingMessage} />}>
                <Component />
            </Suspense>
        );
    };
};
