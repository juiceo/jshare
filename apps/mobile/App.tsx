import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider, Themes } from '@jshare/theme';

import { Home } from './src/Home';
import { FontLoader } from './src/wrappers/FontLoader';

export default function App() {
    return (
        <SafeAreaProvider>
            <KeyboardProvider>
                <ThemeProvider theme={Themes.dark}>
                    <FontLoader>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <Home />
                        </GestureHandlerRootView>
                    </FontLoader>
                </ThemeProvider>
            </KeyboardProvider>
        </SafeAreaProvider>
    );
}
