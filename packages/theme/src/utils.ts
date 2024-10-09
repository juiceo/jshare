import type { ColorPalette } from './colors/types';
import type { Theme } from './types';
import { spacingUnits } from './spacing';
import { borderRadiusUnits } from './borderRadius';

export const buildTheme = (args: { palette: ColorPalette }): Theme => {
    return {
        palette: args.palette,
        spacing: spacingUnits,
        borderRadius: borderRadiusUnits,
    };
};
