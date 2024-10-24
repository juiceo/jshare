import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

export default function LoginLayout() {
    const { theme } = useTheme();
    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: theme.palette.background.default,
                },
                headerStyle: {
                    backgroundColor: theme.palette.background.default,
                },
                headerTintColor: theme.palette.text.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
    );
}
