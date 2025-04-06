import { Children, useCallback, useState, type ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router';

import { ScreenContext } from '~/components/Screen/ScreenContext';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenHeader } from '~/components/Screen/ScreenHeader';

export const ScreenProvider = (props: {
    children: (ReactElement | null | undefined) | (ReactElement | null | undefined)[];
}) => {
    const childrenArray = Children.toArray(props.children) as ReactElement[];
    const [headerHeight, setHeaderHeight] = useState<number>(0);
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
        <SafeAreaProvider>
            <ScreenContext.Provider
                value={{
                    hasFooter,
                    hasHeader,
                    hasFocus,
                    headerHeight,
                    setHeaderHeight,
                }}
            >
                {props.children}
            </ScreenContext.Provider>
        </SafeAreaProvider>
    );
};
