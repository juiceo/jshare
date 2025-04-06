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
                screenOptions={{
                    contentStyle: {
                        backgroundColor: theme.palette.background.main,
                    },
                    headerShown: false,
                }}
            />
        );
    }
);
