import { Suspense, type ComponentType } from 'react';
import { ActivityIndicator } from 'react-native';
import type { Session } from '@supabase/supabase-js';
import {
    Redirect,
    useLocalSearchParams,
    useRouter,
    type Route,
    type RouteOutputParams,
    type Router,
} from 'expo-router';
import * as Updates from 'expo-updates';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { ErrorBoundary, type ErrorBoundaryFallbackArgs } from '~/components/errors/ErrorBoundary';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { LoadingState } from '~/components/util/LoadingState';
import { useSession } from '~/wrappers/SessionProvider';

export const screen = <TRoute extends Route = Route, TAuth extends boolean = false>(
    args: {
        route?: TRoute;
        auth?: TAuth;
        loadingMessage?: string;
    },
    Component: ComponentType<{
        params: RouteOutputParams<TRoute>;
        router: Router;
        auth: TAuth extends true ? { session: Session; signOut: () => void } : never;
    }>
) => {
    return function SuspenseWrapper() {
        const params = useLocalSearchParams<Route>();
        const router = useRouter();

        const updates = Updates.useUpdates();

        const handleReload = () => {
            Updates.fetchUpdateAsync().then(() => {
                Updates.reloadAsync();
            });
        };

        const renderError = (args: ErrorBoundaryFallbackArgs) => {
            return (
                <Screen>
                    <Screen.Header title="Something went wrong" backButton="back" />
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
                            <Button
                                color="secondary"
                                onPress={handleReload}
                                loading={updates.isChecking || updates.isDownloading}
                            >
                                Reload app
                            </Button>
                            <Button color="primary" onPress={args.reset}>
                                Retry
                            </Button>
                        </Stack>
                    </Screen.Footer>
                </Screen>
            );
        };

        const renderComponent = () => {
            if (args.auth) {
                return (
                    <AuthWrapper>
                        {(auth) => (
                            <Component
                                params={params as RouteOutputParams<TRoute>}
                                router={router}
                                auth={auth as any}
                            />
                        )}
                    </AuthWrapper>
                );
            } else {
                return (
                    <Component
                        params={params as RouteOutputParams<TRoute>}
                        router={router}
                        auth={null as any}
                    />
                );
            }
        };

        return (
            <ErrorBoundary fallback={renderError}>
                <Suspense fallback={<LoadingState message={args.loadingMessage} />}>
                    {renderComponent()}
                </Suspense>
            </ErrorBoundary>
        );
    };
};

const AuthWrapper = (props: {
    children: (auth: { session: Session; signOut: () => void }) => JSX.Element;
}) => {
    const { session, isLoading, signOut } = useSession();

    if (isLoading) {
        return (
            <Stack center absoluteFill>
                <ActivityIndicator />
            </Stack>
        );
    }

    if (!session) {
        return <Redirect href={{ pathname: '/login' }} />;
    }

    return props.children({ session, signOut });
};
