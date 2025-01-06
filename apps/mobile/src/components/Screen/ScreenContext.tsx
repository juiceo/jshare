import { createContext } from 'react';

export type ScreenContextType = {
    hasFooter: boolean;
    hasHeader: boolean;
    hasFocus: boolean;
};

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);
