import React from 'react';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { screen } from '~/wrappers/screen';

export default screen(
    {
        auth: true,
    },
    () => {
        const { theme } = useTheme();

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
            </Stack>
        );
    }
);
