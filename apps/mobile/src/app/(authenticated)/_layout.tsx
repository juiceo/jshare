import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';

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
import { Profiles } from '~/lib/collections/profiles.collection';
import { screen } from '~/wrappers/screen';
import { useSession } from '~/wrappers/SessionProvider';

export default screen(() => {
    const { theme } = useTheme();
    const { session, isLoading: isLoadingSession } = useSession();
    const [termsStatus, setTermsStatus] = useState<TermsAcceptanceStatus>(
        TermsAcceptanceStatus.ACCEPTED
    );

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
        const userId = session?.user.id;
        if (!userId) return;
        Profiles.update(userId, { termsAcceptedAt: new Date() });
        setTermsStatus(TermsAcceptanceStatus.ACCEPTED);
    };

    useEffect(() => {
        const userId = session?.user.id;
        if (!userId) return;
        Profiles.fetchById(userId).then((profile) => {
            if (!profile) return;
            setTermsStatus(getTermsAcceptanceStatus(profile));
        });
    }, [session?.user.id]);

    if (isLoadingSession) {
        return (
            <StackView center absoluteFill>
                <ActivityIndicator />
            </StackView>
        );
    }

    if (!session) {
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
                            color: theme.palette.accent.light,
                        }}
                        onPress={openTermsOfService}
                    >
                        Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text
                        style={{
                            color: theme.palette.accent.light,
                        }}
                        onPress={openPrivacyPolicy}
                    >
                        Privacy Policy
                    </Text>
                    .
                </Typography>
                <Typography variant="body1" my="3xl" align="center">
                    If you have any questions or concerns, please contact us at{' '}
                    <Text onPress={openSupportEmail} style={{ color: theme.palette.accent.light }}>
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
                    backgroundColor: theme.palette.background.main,
                },

                headerStyle: {
                    backgroundColor: theme.palette.background.main,
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
            />
            <Stack.Screen
                name="join-group"
                options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen name="profile/index" options={{ headerShown: false }} />
            <Stack.Screen name="settings/index" options={{ headerShown: false }} />
        </Stack>
    );
});
