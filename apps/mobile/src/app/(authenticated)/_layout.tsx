import React from 'react';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)',
        auth: true,
    },
    () => {
        const { theme } = useTheme();

        /**
         * TODO: If no profile, redirect to login/welcome
         */

        return (
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
        );
    }
);
