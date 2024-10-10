import type { BorderRadiusUnit, BorderRadiusUnits } from './types';

export const borderRadiusUnits: BorderRadiusUnits = {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 12,
    '2xl': 18,
    '3xl': 24,
    full: 9999,
};

export const getBorderRadius = (unit: BorderRadiusUnit | undefined) => {
    return unit ? borderRadiusUnits[unit] : undefined;
};

export * from './types';
