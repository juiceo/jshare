import { borderRadiusUnits } from './borderRadius';
import type { ColorPalette } from './colors/types';
import { spacingUnits } from './spacing';
import type { Theme } from './types';

export const buildTheme = (args: { palette: ColorPalette }): Theme => {
    return {
        palette: args.palette,
        spacing: spacingUnits,
        borderRadius: borderRadiusUnits,
    };
};
