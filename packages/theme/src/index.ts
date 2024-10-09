import { darkPalette } from './colors/dark';
import type { Theme } from './types';
import { buildTheme } from './utils';

export const Themes = {
    dark: buildTheme({ palette: darkPalette }),
} satisfies Record<string, Theme>;
