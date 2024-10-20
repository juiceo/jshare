import { useContext } from 'react';

import { ScreenContext } from './ScreenContext';

export const useHasParentScreen = () => {
    const context = useContext(ScreenContext);

    return context !== undefined;
};
