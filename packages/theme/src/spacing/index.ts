import type { SpacingUnit, SpacingUnits } from './types';

export const spacingUnits: SpacingUnits = {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
};

export const getSpacing = (unit: SpacingUnit | undefined) => {
    return unit ? spacingUnits[unit] : undefined;
};

export * from './types';
