import { darkPalette } from './colors';
import type { Theme } from './types';
import { buildTheme } from './utils';

export const Themes = {
    dark: buildTheme({ palette: darkPalette }),
} satisfies Record<string, Theme>;
