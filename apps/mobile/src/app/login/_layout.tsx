import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { screen } from '~/wrappers/screen';

export default screen({}, () => {
    const { theme } = useTheme();
    return (
        <Stack
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
        />
    );
});
