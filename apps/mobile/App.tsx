import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider, Themes } from '@jshare/theme';

import { Home } from './src/Home';
import { FontLoader } from './src/wrappers/FontLoader';

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={Themes.dark}>
                <FontLoader>
                    <Home />
                </FontLoader>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
