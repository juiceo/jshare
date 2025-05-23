import { Suspense } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { LoadingState } from '~/components/util/LoadingState';
import { GroupContextProvider } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

export default screen(() => {
    const params = useLocalSearchParams<{ groupId: string }>();
    const { theme } = useTheme();

    return (
        <Suspense fallback={<LoadingState message="Loading group..." />}>
            <GroupContextProvider groupId={params.groupId}>
                <Stack
                    screenOptions={{
                        contentStyle: {
                            backgroundColor: theme.palette.background.primary,
                        },
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="create-expense"
                        options={{ presentation: 'modal', headerShown: false }}
                        initialParams={{ modal: true }}
                    />
                    <Stack.Screen
                        name="create-payment"
                        options={{ presentation: 'modal', headerShown: false }}
                        initialParams={{ modal: true }}
                    />
                </Stack>
            </GroupContextProvider>
        </Suspense>
    );
});
