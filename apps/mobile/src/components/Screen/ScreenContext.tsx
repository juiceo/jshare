import { createContext } from 'react';

export type ScreenContextType = {
    hasHeader: boolean;
    hasFooter: boolean;
    disableBottomInset?: boolean;
    enableTopInset?: boolean;
};

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);
