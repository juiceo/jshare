import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

import { useScreen } from './useScreen';

export type ScreenContentProps = {
    padding?: SpacingUnit;
    style?: ViewStyle;
};

export const ScreenContent = (props: PropsWithChildren<ScreenContentProps>) => {
    const { style, padding = 'md' } = props;
    const { theme } = useTheme();
    const { hasFooter, enableTopInset, disableBottomInset } = useScreen();

    return (
        <SafeAreaView
            style={[style, { flex: 1 }]}
            edges={{
                top: !enableTopInset ? 'off' : 'additive',
                bottom: hasFooter || disableBottomInset ? 'off' : 'additive',
                left: 'additive',
                right: 'additive',
            }}
        >
            <KeyboardAvoidingView
                style={{ margin: theme.spacing[padding], flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={theme.spacing[padding]}
            >
                {props.children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
