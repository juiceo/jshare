import { Themes, ThemeProvider } from '@jshare/theme';

import { Home } from './src/Home';
import { FontLoader } from './src/wrappers/FontLoader';

export default function App() {
    return (
        <ThemeProvider theme={Themes.dark}>
            <FontLoader>
                <Home />
            </FontLoader>
        </ThemeProvider>
    );
}
