import { createContext } from 'react';

export type ScreenContextType = {
    hasFooter: boolean;
    disableBottomInset?: boolean;
    enableTopInset?: boolean;
};

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);
