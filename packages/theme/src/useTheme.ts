import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme cannot be used outside of a ThemeProvider');
    }

    return context;
};
