import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';

import { ThemeProvider, Themes, useTheme } from '@jshare/theme';

import { FontLoader } from '~/wrappers/FontLoader';
import { SessionProvider } from '~/wrappers/SessionProvider';

export default function AppLayout() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <ThemeProvider theme={Themes.dark}>
                    <FontLoader>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <SessionProvider>
                                <BottomSheetModalProvider>
                                    <RootStack />
                                </BottomSheetModalProvider>
                            </SessionProvider>
                        </GestureHandlerRootView>
                    </FontLoader>
                </ThemeProvider>
            </KeyboardProvider>
        </SafeAreaProvider>
    );
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
