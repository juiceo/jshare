import type { ColorPalette } from './colors/types';
import type { SpacingUnits } from './spacing/types';
import type { BorderRadiusUnits } from './borderRadius/types';

export type Theme = {
    palette: ColorPalette;
    spacing: SpacingUnits;
    borderRadius: BorderRadiusUnits;
};
