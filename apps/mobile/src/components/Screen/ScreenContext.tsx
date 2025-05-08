import { createContext } from 'react';
import type { SharedValue } from 'react-native-reanimated';

export type ScreenContextType = {
    hasFooter: boolean;
    hasHeader: boolean;
    hasFocus: boolean;
    headerHeight: number;
    setHeaderHeight: (value: number) => void;
    connectedSv: SharedValue<number>;
    isModal: boolean;
};

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);
