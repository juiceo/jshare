import 'react-native-get-random-values';

import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { ThemeProvider, Themes, useTheme } from '@jshare/theme';

import { AppErrorBoundary } from '~/components/errors/AppErrorBoundary';
import { ToastManager } from '~/components/Toast/ToastManager';
import { LoadingState } from '~/components/util/LoadingState';
import { FontLoader } from '~/wrappers/FontLoader';
import { JotaiProvider } from '~/wrappers/JotaiProvider';
import { QueryProvider } from '~/wrappers/QueryProvider';
import { SessionProvider } from '~/wrappers/SessionProvider';

// This is the default configuration
configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

dayjs.extend(relativeTime);

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
    fade: true,
    duration: 300,
});

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function AppLayout() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <ThemeProvider theme={Themes.dark}>
                    <FontLoader>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <JotaiProvider>
                                <QueryProvider>
                                    <SessionProvider>
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
                                    </SessionProvider>
                                </QueryProvider>
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
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
            SplashScreen.hide();
        }, 1000);
    }, []);

    if (!isReady) return <LoadingState />;

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: theme.palette.background.primary,
                },
                headerStyle: {
                    backgroundColor: theme.palette.background.primary,
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

export default AppLayout;
