import type { BorderRadiusUnits } from './borderRadius/types';
import type { ColorPalette } from './colors/types';
import type { SpacingUnits } from './spacing/types';

export type Theme = {
    palette: ColorPalette;
    spacing: SpacingUnits;
    borderRadius: BorderRadiusUnits;
};
