import type { PropsWithChildren } from 'react';
import type { ScrollViewProps } from 'react-native';
import { KeyboardAvoidingView, KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

import { useScreen } from './useScreen';

export type ScreenContentProps = {
    padding?: SpacingUnit;
};

export const ScreenContentFixed = (props: PropsWithChildren<ScreenContentProps>) => {
    const { padding = 'md' } = props;
    const { theme } = useTheme();
    const { hasHeader, hasFooter, enableTopInset, disableBottomInset } = useScreen();

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
            edges={{
                top: hasHeader || !enableTopInset ? 'off' : 'additive',
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

export const ScreenContentScrollable = (
    props: PropsWithChildren<ScreenContentProps & ScrollViewProps>
) => {
    const { style, contentContainerStyle, children, ...scrollViewProps } = props;
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const { padding = 'md' } = props;
    const { hasHeader, hasFooter, enableTopInset, disableBottomInset } = useScreen();
    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={[
                {
                    paddingTop:
                        theme.spacing[padding] + (hasHeader || !enableTopInset ? 0 : insets.top),
                    paddingLeft: theme.spacing[padding] + insets.left,
                    paddingRight: theme.spacing[padding] + insets.right,
                    paddingBottom:
                        theme.spacing[padding] +
                        (hasFooter || disableBottomInset ? 0 : insets.bottom),
                },
                contentContainerStyle,
            ]}
            {...scrollViewProps}
        >
            {children}
        </KeyboardAwareScrollView>
    );
};
