import { createContext } from 'react';

export type ScreenContextType = {
    hasFooter: boolean;
    hasHeader: boolean;
    hasFocus: boolean;
    headerHeight: number;
    setHeaderHeight: (value: number) => void;
};

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);
