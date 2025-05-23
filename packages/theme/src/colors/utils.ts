import chroma from 'chroma-js';
import { get } from 'lodash';

import type { Theme } from '../types';
import type { ColorPalette, ColorPath, PrimaryColorPath, TextColorVariant } from './types';

export const getColorVariant = <TKey extends keyof ColorPalette>(
    key: TKey,
    variant: keyof ColorPalette[TKey],
    theme: Theme
) => {
    return theme.palette[key][variant];
};

export const getColorFromPath = (key: ColorPath | (string & {}) | undefined, theme: Theme) => {
    if (!key) return undefined;

    return get(theme.palette, key) ?? key;
};

export const getTextColorFromPath = (
    key: TextColorVariant | PrimaryColorPath | undefined,
    theme: Theme
): string | undefined => {
    if (!key) return undefined;

    const value = get(theme.palette.text, key) ?? get(theme.palette, key);

    if (typeof value === 'string') {
        return value;
    }

    return undefined;
};

export const getContrastTextColor = (
    hex: string,
    options: [hex1: string, hex2: string] = ['#ffffff', '#000000']
) => {
    const color = chroma(hex);
    const contrast1 = chroma.contrast(color, options[0]);
    const contrast2 = chroma.contrast(color, options[1]);

    return contrast1 > contrast2 ? options[0] : options[1];
};

export const isAcceptableContrast = (hex1: string, hex2: string) => {
    return chroma.contrast(hex1, hex2) >= 4.5;
};

export const alpha = (hex: string, alpha: number) => {
    return chroma(hex).alpha(alpha).hex();
};

export const darken = (hex: string, factor: number) => {
    return chroma(hex).darken(factor).hex();
};
