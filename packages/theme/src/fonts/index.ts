import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import type { FontSource } from 'expo-font';

export const Fonts = {
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
} satisfies Record<string, FontSource>;

export type FontFamily = keyof typeof Fonts;
