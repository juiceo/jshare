import 'react-native-get-random-values';

import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';

import { getEnv } from '@jshare/env';
import { ThemeProvider, Themes, useTheme } from '@jshare/theme';

import { AppErrorBoundary } from '~/components/errors/AppErrorBoundary';
import { FontLoader } from '~/wrappers/FontLoader';
import { JotaiProvider } from '~/wrappers/JotaiProvider';
import { QueryProvider } from '~/wrappers/QueryProvider';
import { SessionProvider } from '~/wrappers/SessionProvider';

const storybookEnabled = getEnv('STORYBOOK_ENABLED') === 'true';

export default function AppLayout() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <ThemeProvider theme={Themes.dark}>
                    <FontLoader>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <JotaiProvider>
                                <SessionProvider>
                                    <QueryProvider>
                                        <BottomSheetModalProvider>
                                            <AppErrorBoundary>
                                                {storybookEnabled ? (
                                                    <StorybookRoot />
                                                ) : (
                                                    <RootStack />
                                                )}
                                            </AppErrorBoundary>
                                        </BottomSheetModalProvider>
                                    </QueryProvider>
                                </SessionProvider>
                            </JotaiProvider>
                        </GestureHandlerRootView>
                    </FontLoader>
                </ThemeProvider>
            </KeyboardProvider>
        </SafeAreaProvider>
    );
}

let StorybookRoot: () => JSX.Element = () => <></>;

if (storybookEnabled) {
    const StorybookUI = require('../../.storybook').default;

    //eslint-disable-next-line
    StorybookRoot = () => {
        return (
            <View style={{ flex: 1 }}>
                <StorybookUI />
            </View>
        );
    };
}

const RootStack = () => {
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
};
