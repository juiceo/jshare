import type { PropsWithChildren } from 'react';
import { SafeAreaView, type SafeAreaViewProps } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Stack } from './Stack';

export const Screen = (props: PropsWithChildren) => {
    return (
        <Stack flex={1} column alignStretch bg="background.main">
            <StatusBar style="auto" />
            {props.children}
        </Stack>
    );
};

const ScreenHeader = (props: SafeAreaViewProps) => {
    const { style, ...rest } = props;
    return <SafeAreaView style={[{ flex: 0 }, style]} {...rest} />;
};

const ScreenFooter = (props: SafeAreaViewProps) => {
    const { style, ...rest } = props;

    return <SafeAreaView style={[{ flex: 0 }, style]} {...rest} />;
};

const ScreenContent = (props: SafeAreaViewProps) => {
    const { style, ...rest } = props;
    return <SafeAreaView style={[{ flex: 1 }, style]} {...rest} />;
};

Screen.Header = ScreenHeader;
Screen.Footer = ScreenFooter;
Screen.Content = ScreenContent;
