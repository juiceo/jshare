import { Themes, ThemeProvider } from '@jshare/theme';

import { Home } from './src/Home';

export default function App() {
    return (
        <ThemeProvider theme={Themes.dark}>
            <Home />
        </ThemeProvider>
    );
}
