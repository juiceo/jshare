import { TextStyle } from 'react-native';

import type { FontFamily } from '../fonts';

export type TypographyVariants = {
    h1: TypographyVariantDefinition;
    h2: TypographyVariantDefinition;
    h3: TypographyVariantDefinition;
    h4: TypographyVariantDefinition;
    h5: TypographyVariantDefinition;
    h6: TypographyVariantDefinition;
    subtitle1: TypographyVariantDefinition;
    subtitle2: TypographyVariantDefinition;
    body1: TypographyVariantDefinition;
    body2: TypographyVariantDefinition;
    overline: TypographyVariantDefinition;
    caption: TypographyVariantDefinition;
    button: TypographyVariantDefinition;
    buttonSmall: TypographyVariantDefinition;
};

export type TypographyVariantDefinition = {
    fontFamily: FontFamily;
} & Pick<TextStyle, 'fontSize' | 'lineHeight' | 'letterSpacing' | 'textTransform'>;

export type TypographyVariant = keyof TypographyVariants;
