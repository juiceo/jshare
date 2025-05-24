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
    body1: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    body2: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    overline: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    caption: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.1,
    },
    button: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    buttonSmall: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
};

export * from './types';
