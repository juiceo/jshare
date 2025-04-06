import { Suspense } from 'react';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { LoadingState } from '~/components/util/LoadingState';
import { GroupContextProvider } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]',
    },
    ({ params }) => {
        const { theme } = useTheme();

        return (
            <Suspense fallback={<LoadingState message="Loading group..." />}>
                <GroupContextProvider groupId={params.groupId}>
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
                </GroupContextProvider>
            </Suspense>
        );
    }
);
