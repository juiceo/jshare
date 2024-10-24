import React from 'react';
import { Redirect, Stack } from 'expo-router';

import { useAuth } from '~/wrappers/AuthContext';

export default function AuthenticatedLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/login" />;
    }

    return (
        <Stack>
            <Stack.Screen
                name="create-group"
                options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
                name="join-group/index"
                options={{ presentation: 'modal', headerShown: false }}
            />
        </Stack>
    );
}
