import { Children, useCallback, useState, type ReactElement } from 'react';
import { useFocusEffect } from 'expo-router';

import { ScreenContext } from '~/components/Screen/ScreenContext';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenHeader } from '~/components/Screen/ScreenHeader';

export const ScreenProvider = (props: { children: ReactElement | ReactElement[] }) => {
    const childrenArray = Children.toArray(props.children) as ReactElement[];
    const hasFooter = childrenArray.some((child) => child.type === ScreenFooter);
    const hasHeader = childrenArray.some((child) => child.type === ScreenHeader);
    const [hasFocus, setHasFocus] = useState<boolean>(false);

    useFocusEffect(
        useCallback(() => {
            setHasFocus(true);
            return () => {
                setHasFocus(false);
            };
        }, [])
    );

    return (
        <ScreenContext.Provider
            value={{
                hasFooter,
                hasHeader,
                hasFocus,
            }}
        >
            {props.children}
        </ScreenContext.Provider>
    );
};
