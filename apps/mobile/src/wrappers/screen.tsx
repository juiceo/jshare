import { Suspense, type ComponentType } from 'react';
import {
    useGlobalSearchParams,
    useLocalSearchParams,
    useRouter,
    type RouteParams,
    type Routes,
} from 'expo-router';
import { ZodObject } from 'zod';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { ErrorBoundary, type ErrorBoundaryFallbackArgs } from '~/components/errors/ErrorBoundary';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { LoadingState } from '~/components/util/LoadingState';

export const screen = <TRoute extends Routes>(
    args: {
        route: TRoute;
        loadingMessage?: string;
    },
    Component: ComponentType<RouteParams<TRoute>>
) => {
    return function SuspenseWrapper() {
        const params = useLocalSearchParams<RouteParams<TRoute>>();
        const router = useRouter();
        const renderError = (args: ErrorBoundaryFallbackArgs) => {
            return (
                <Screen>
                    <Screen.Content>
                        <Stack flex={1} center spacing="xl" p="xl">
                            <Icon
                                name="ServerCrash"
                                size={64}
                                color={(theme) => theme.palette.text.primary}
                            />
                            <Typography variant="h1">Oops!</Typography>
                            <Typography variant="body1" align="center">
                                Looks like something unexpected happened. We've been notified of the
                                issue and will look into it as soon as possible.
                            </Typography>
                            <Typography variant="caption" align="center" color="error.light">
                                Error message: {args.error.message}
                            </Typography>
                        </Stack>
                    </Screen.Content>
                    <Screen.Footer>
                        <Stack column spacing="md">
                            <Button color="secondary" onPress={router.back}>
                                Go back
                            </Button>
                            <Button color="primary" onPress={args.reset}>
                                Retry
                            </Button>
                        </Stack>
                    </Screen.Footer>
                </Screen>
            );
        };

        return (
            <ErrorBoundary fallback={renderError}>
                <Suspense fallback={<LoadingState message={args.loadingMessage} />}>
                    <Component {...(params as any)} />
                </Suspense>
            </ErrorBoundary>
        );
    };
};
