import { Children, useCallback, useEffect, useMemo, useState, type ReactElement } from 'react';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { OfflineIndicator } from '~/components/OfflineIndicator';
import { ScreenContext } from '~/components/Screen/ScreenContext';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenHeader } from '~/components/Screen/ScreenHeader';
import { SystemStore } from '~/lib/store/SystemStore';

export const ScreenProvider = observer(
    (props: {
        children: (ReactElement | null | undefined) | (ReactElement | null | undefined)[];
    }) => {
        const childrenArray = Children.toArray(props.children) as ReactElement[];
        const [headerHeight, setHeaderHeight] = useState<number>(0);
        const hasFooter = childrenArray.some((child) => child.type === ScreenFooter);
        const hasHeader = childrenArray.some((child) => child.type === ScreenHeader);
        const [hasFocus, setHasFocus] = useState<boolean>(false);
        const connected = SystemStore.isConnected;
        const connectedSv = useSharedValue(connected ? 1 : 0);

        const params = useLocalSearchParams();

        const isModal = useMemo(() => {
            return (params as any).modal === 'true';
        }, [params]);

        useEffect(() => {
            connectedSv.value = withTiming(connected ? 1 : 0, {
                duration: 200,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            });
        }, [connected, connectedSv]);

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
                    headerHeight,
                    setHeaderHeight,
                    connectedSv,
                    isModal,
                }}
            >
                <OfflineIndicator />
                {props.children}
            </ScreenContext.Provider>
        );
    }
);
