import { useContext } from 'react';

import { ScreenContext } from './ScreenContext';

export const useScreen = () => {
    const context = useContext(ScreenContext);

    if (context === undefined) {
        throw new Error('useScreen must be used within a ScreenProvider');
    }

    return context;
};
