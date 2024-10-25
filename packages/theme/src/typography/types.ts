import { TextStyle } from 'react-native';

import type { FontFamily } from '../fonts';

export type TypographyVariants = {
    h1: TypographyVariantDefinition;
    h2: TypographyVariantDefinition;
    h3: TypographyVariantDefinition;
    h4: TypographyVariantDefinition;
    body1: TypographyVariantDefinition;
    body2: TypographyVariantDefinition;
    caption: TypographyVariantDefinition;
    button: TypographyVariantDefinition;
};

export type TypographyVariantDefinition = {
    fontFamily: FontFamily;
} & Pick<TextStyle, 'fontSize' | 'lineHeight' | 'letterSpacing'>;

export type TypographyVariant = keyof TypographyVariants;
