import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';

import { ThemeProvider, Themes, useTheme } from '@jshare/theme';

import { AuthProvider } from '../wrappers/AuthContext';
import { FontLoader } from '../wrappers/FontLoader';

export default function AppLayout() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <ThemeProvider theme={Themes.dark}>
                    <FontLoader>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <AuthProvider>
                                <RootView />
                            </AuthProvider>
                        </GestureHandlerRootView>
                    </FontLoader>
                </ThemeProvider>
            </KeyboardProvider>
        </SafeAreaProvider>
    );
}

const RootView = () => {
    const { theme } = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: theme.palette.background.main }}>
            <Slot />
        </View>
    );
};
