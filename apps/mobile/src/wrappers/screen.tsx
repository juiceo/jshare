import { Suspense, type ComponentType } from 'react';
import { ActivityIndicator, Linking, Text } from 'react-native';
import type { Session } from '@supabase/supabase-js';
import { Redirect, useRouter, type Router } from 'expo-router';
import * as Updates from 'expo-updates';

import {
    getTermsAcceptanceStatus,
    PRIVACY_POLICY_URL,
    TERMS_OF_SERVICE_URL,
    TermsAcceptanceStatus,
} from '@jshare/common';
import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { ErrorBoundary, type ErrorBoundaryFallbackArgs } from '~/components/errors/ErrorBoundary';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { LoadingState } from '~/components/util/LoadingState';
import { trpc } from '~/lib/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export const screen = <TAuth extends boolean = false>(
    args: {
        auth?: TAuth;
        loadingMessage?: string;
    },
    Component: ComponentType<{
        router: Router;
        auth: TAuth extends true
            ? { session: Session; userId: string; signOut: () => void }
            : never;
    }>
) => {
    return function SuspenseWrapper() {
        const router = useRouter();
        const { signOut } = useSession();

        const updates = Updates.useUpdates();

        const handleReload = () => {
            Updates.fetchUpdateAsync().then(() => {
                Updates.reloadAsync();
            });
        };

        const handleClear = () => {
            signOut();
        };

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
                            {router.canGoBack() && (
                                <Button color="secondary" onPress={router.back}>
                                    Go back
                                </Button>
                            )}
                            <Button
                                color="secondary"
                                onPress={handleReload}
                                loading={updates.isChecking || updates.isDownloading}
                            >
                                Check for updates
                            </Button>
                            <Button color="secondary" onPress={handleClear}>
                                Log out and clear data
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
                        {(auth) => <Component router={router} auth={auth as any} />}
                    </AuthWrapper>
                );
            } else {
                return <Component router={router} auth={null as any} />;
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
    children: (auth: { session: Session; userId: string; signOut: () => void }) => JSX.Element;
}) => {
    const { session, isLoading, signOut } = useSession();
    const { theme } = useTheme();
    const trpcUtils = trpc.useUtils();
    const profile = trpc.profiles.me.useQuery();
    const acceptTerms = trpc.profiles.acceptTerms.useMutation();

    const openPrivacyPolicy = () => {
        Linking.openURL(PRIVACY_POLICY_URL);
    };

    const openTermsOfService = () => {
        Linking.openURL(TERMS_OF_SERVICE_URL);
    };

    const handleAcceptTerms = async () => {
        const updatedProfile = await acceptTerms.mutateAsync();

        trpcUtils.profiles.me.setData(undefined, () => updatedProfile);
    };

    if (isLoading || profile.isLoading) {
        return (
            <Stack center absoluteFill>
                <ActivityIndicator />
            </Stack>
        );
    }

    if (!session || !profile.data) {
        return <Redirect href={{ pathname: '/login' }} />;
    }

    const termsStatus = getTermsAcceptanceStatus(profile.data);

    if (termsStatus !== TermsAcceptanceStatus.ACCEPTED) {
        return (
            <Stack flex={1} absoluteFill>
                <Stack flex={1} justifyCenter p="3xl">
                    <Typography variant="h2">We have updated our Terms of Service</Typography>
                    <Typography variant="body1" mt="xl">
                        To continue using JShare, please confirm that you have read and accept the
                        updated{' '}
                        <Text
                            style={{
                                color: theme.palette.accent.light,
                                textDecorationLine: 'underline',
                            }}
                            onPress={openTermsOfService}
                        >
                            Terms of Service
                        </Text>{' '}
                        and{' '}
                        <Text
                            style={{
                                color: theme.palette.accent.light,
                                textDecorationLine: 'underline',
                            }}
                            onPress={openPrivacyPolicy}
                        >
                            Privacy Policy
                        </Text>
                        .
                    </Typography>
                    <Typography variant="body1" my="3xl">
                        If you have any questions or concerns, please contact us at
                        support@jshare.me.
                    </Typography>
                    <Button onPress={handleAcceptTerms} loading={acceptTerms.isPending}>
                        Accept & Continue
                    </Button>
                </Stack>
            </Stack>
        );
    }

    return props.children({ session, signOut, userId: session.user.id });
};
