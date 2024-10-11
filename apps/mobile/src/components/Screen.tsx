import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@jshare/theme';

export const Screen = (props: PropsWithChildren) => {
    const { theme } = useTheme();
    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.palette.background.main }}>
                {props.children}
            </SafeAreaView>
        </>
    );
};
