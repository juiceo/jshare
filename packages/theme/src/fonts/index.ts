import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import type { FontSource } from 'expo-font';

export const Fonts = {
    Poppins_600SemiBold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Ubuntu_700Bold,
} satisfies Record<string, FontSource>;

export type FontFamily = keyof typeof Fonts;
