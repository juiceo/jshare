import type { FontSource } from 'expo-font';

export const Fonts = {
    'Poppins-Medium': require('./assets/Poppins-Medium.ttf'),
    'Nunito-Regular': require('./assets/Nunito-Regular.ttf'),
    'Nunito-Medium': require('./assets/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('./assets/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./assets/Nunito-Bold.ttf'),
} satisfies Record<string, FontSource>;

export type FontFamily = keyof typeof Fonts;
