import { useContext } from 'react';

import { ScreenContext } from '~/components/Screen/ScreenContext';

export const useHasParentScreen = () => {
    const context = useContext(ScreenContext);

    return context !== undefined;
};
