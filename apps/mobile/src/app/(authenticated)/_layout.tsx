import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { Stack as StackView } from '~/components/atoms/Stack';
import { useProfile } from '~/hooks/useProfile';
import { useAuth } from '~/wrappers/AuthContext';
import { AuthenticatedContextProvider } from '~/wrappers/AuthenticatedContext';

export default function AuthenticatedLayout() {
    const { user } = useAuth();
    const { data: profile, isLoading: isProfileLoading } = useProfile();

    if (!user) {
        return <Redirect href="/login" />;
    }

    if (isProfileLoading) {
        return (
            <StackView center absoluteFill>
                <ActivityIndicator />
            </StackView>
        );
    }

    if (!profile) {
        return <Redirect href="/login/welcome" />;
    }

    return (
        <AuthenticatedContextProvider user={user} profile={profile}>
            <Stack>
                <Stack.Screen
                    name="create-group/index"
                    options={{ presentation: 'modal', headerShown: false }}
                />
                <Stack.Screen
                    name="join-group/index"
                    options={{ presentation: 'modal', headerShown: false }}
                />
            </Stack>
        </AuthenticatedContextProvider>
    );
}
