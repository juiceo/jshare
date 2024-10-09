import React, { createContext, type PropsWithChildren } from 'react';

import type { Theme } from './types';

export const ThemeContext = createContext<{ theme: Theme } | null>(null);

export const ThemeProvider = (props: PropsWithChildren<{ theme: Theme }>) => {
    return (
        <ThemeContext.Provider value={{ theme: props.theme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
