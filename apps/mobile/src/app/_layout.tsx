import 'react-native-get-random-values';

import { useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { ThemeProvider, Themes, useTheme } from '@jshare/theme';

import { AppErrorBoundary } from '~/components/errors/AppErrorBoundary';
import { ToastManager } from '~/components/Toast/ToastManager';
import { FontLoader } from '~/wrappers/FontLoader';
import { JotaiProvider } from '~/wrappers/JotaiProvider';
import { QueryProvider } from '~/wrappers/QueryProvider';
import { SessionProvider } from '~/wrappers/SessionProvider';

dayjs.extend(relativeTime);

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
    fade: true,
    duration: 300,
});

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

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
                                                <ToastManager />
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

    useEffect(() => {
        SplashScreen.hide();
    }, []);

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
