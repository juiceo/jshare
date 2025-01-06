import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { Stack as StackView } from '~/components/atoms/Stack';
import { AuthenticatedContextProvider } from '~/wrappers/AuthenticatedContextProvider';
import { screen } from '~/wrappers/screen';
import { useSession } from '~/wrappers/SessionProvider';

export default screen(
    {
        route: '/(authenticated)',
    },
    () => {
        const { theme } = useTheme();
        const { session, isLoading } = useSession();

        if (isLoading) {
            /**
             * TODO: Return splash screen here
             */
            return (
                <StackView center absoluteFill>
                    <ActivityIndicator />
                </StackView>
            );
        }
        if (!session) {
            return <Redirect href="/login" />;
        }

        /**
         * TODO: If no profile, redirect to login/welcome
         */

        return (
            <AuthenticatedContextProvider session={session}>
                <Stack
                    screenOptions={{
                        contentStyle: {
                            backgroundColor: theme.palette.background.main,
                        },
                        headerShown: false,
                    }}
                >
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
);
