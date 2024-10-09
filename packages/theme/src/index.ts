import { darkPalette } from './colors/dark';
import type { Theme } from './types';
import { buildTheme } from './utils';

export { Fonts } from './fonts';
export { ThemeProvider } from './ThemeContext';
export { useTheme } from './useTheme';

export const Themes = {
    dark: buildTheme({ palette: darkPalette }),
} satisfies Record<string, Theme>;
