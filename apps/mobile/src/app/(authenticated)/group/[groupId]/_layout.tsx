import { Suspense } from 'react';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { LoadingState } from '~/components/util/LoadingState';

export default function GroupLayout() {
    const { theme } = useTheme();

    return (
        <Suspense fallback={<LoadingState message="Loading group..." />}>
            <Stack
                screenOptions={{
                    contentStyle: {
                        backgroundColor: theme.palette.background.main,
                    },
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="create-expense"
                    options={{ presentation: 'modal', headerShown: false }}
                />
                <Stack.Screen
                    name="create-payment"
                    options={{ presentation: 'modal', headerShown: false }}
                />
            </Stack>
        </Suspense>
    );
}
