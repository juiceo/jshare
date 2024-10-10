import type { TypographyVariants } from './types';

export const typographyVariants: TypographyVariants = {
    h1: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: -0.5,
    },
    h2: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: -0.25,
    },
    h3: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
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
    caption: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
    },
    button: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 1.25,
    },
};

export * from './types';
