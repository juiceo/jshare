import type { TypographyVariants } from './types';

export const typographyVariants: TypographyVariants = {
    h1: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: -0.5,
    },
    h2: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: -0.25,
    },
    h3: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
    },
    h4: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        lineHeight: 32,
        letterSpacing: 0,
    },
    h5: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0,
    },
    h6: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        lineHeight: 32,
        letterSpacing: 0,
    },
    subtitle1: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    subtitle2: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    body1: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    body2: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    overline: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    caption: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.1,
    },
    button: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    buttonSmall: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
};

export * from './types';
