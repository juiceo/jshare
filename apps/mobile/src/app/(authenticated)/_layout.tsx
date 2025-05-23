import { useMemo } from 'react';
import { ActivityIndicator, Linking, Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { observer } from 'mobx-react-lite';

import {
    getTermsAcceptanceStatus,
    PRIVACY_POLICY_URL,
    SUPPORT_EMAIL,
    TERMS_OF_SERVICE_URL,
    TermsAcceptanceStatus,
} from '@jshare/common';
import { useTheme } from '@jshare/theme';

import { Stack as StackView } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { screen } from '~/wrappers/screen';

const AuthenticatedLayout = screen(
    observer(() => {
        const { theme } = useTheme();
        const authState = SessionStore.state;
        const user = SessionStore.userMaybe;

        const profile = Store.profiles.findById(user?.id);

        const termsStatus = useMemo(() => {
            if (!profile) return null;
            return getTermsAcceptanceStatus(profile.data);
        }, [profile]);

        const openPrivacyPolicy = () => {
            Linking.openURL(PRIVACY_POLICY_URL);
        };

        const openTermsOfService = () => {
            Linking.openURL(TERMS_OF_SERVICE_URL);
        };

        const openSupportEmail = () => {
            Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
        };

        const handleAcceptTerms = () => {
            if (!profile) return;
            Store.profiles.update(profile.id, { termsAcceptedAt: new Date() });
        };

        if (authState.type === 'loading') {
            return (
                <StackView center absoluteFill>
                    <ActivityIndicator />
                </StackView>
            );
        }

        if (authState.type === 'unauthenticated' || authState.type === 'error' || !profile) {
            return <Redirect href={{ pathname: '/login' }} />;
        }

        if (termsStatus !== TermsAcceptanceStatus.ACCEPTED) {
            return (
                <StackView p="3xl" center flex={1}>
                    <Typography variant="h2" align="center">
                        We have updated our Terms of Service
                    </Typography>
                    <Typography variant="body1" mt="xl" align="center">
                        To continue using JShare, please confirm that you have read and accept the
                        updated{' '}
                        <Text
                            style={{
                                color: theme.palette.accent.primary,
                            }}
                            onPress={openTermsOfService}
                        >
                            Terms of Service
                        </Text>{' '}
                        and{' '}
                        <Text
                            style={{
                                color: theme.palette.accent.primary,
                            }}
                            onPress={openPrivacyPolicy}
                        >
                            Privacy Policy
                        </Text>
                        .
                    </Typography>
                    <Typography variant="body1" my="3xl" align="center">
                        If you have any questions or concerns, please contact us at{' '}
                        <Text
                            onPress={openSupportEmail}
                            style={{ color: theme.palette.accent.primary }}
                        >
                            {SUPPORT_EMAIL}
                        </Text>
                    </Typography>
                    <Button onPress={handleAcceptTerms} loading={false}>
                        Accept & Continue
                    </Button>
                </StackView>
            );
        }

        return (
            <Stack
                initialRouteName="(tabs)"
                screenOptions={{
                    contentStyle: {
                        backgroundColor: theme.palette.background.primary,
                    },

                    headerStyle: {
                        backgroundColor: theme.palette.background.primary,
                    },
                    headerTintColor: theme.palette.text.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false,
                }}
            >
                <Stack.Screen name="(tabs)" />
                <Stack.Screen
                    name="create-group/index"
                    options={{ presentation: 'modal', headerShown: false }}
                    initialParams={{ modal: true }}
                />
                <Stack.Screen
                    name="join-group/index"
                    options={{ presentation: 'modal', headerShown: false }}
                    initialParams={{ modal: true }}
                />
                <Stack.Screen
                    name="join-group/[code]"
                    options={{ presentation: 'modal', headerShown: false }}
                    initialParams={{ modal: true }}
                />
                <Stack.Screen name="profile/index" options={{ headerShown: false }} />
                <Stack.Screen name="preferences/index" options={{ headerShown: false }} />
                <Stack.Screen name="settings/index" options={{ headerShown: false }} />
                <Stack.Screen name="updates/index" options={{ headerShown: false }} />
                {__DEV__ && (
                    <Stack.Screen
                        name="developer-settings/index"
                        options={{ headerShown: false }}
                    />
                )}
            </Stack>
        );
    })
);

export default AuthenticatedLayout;
