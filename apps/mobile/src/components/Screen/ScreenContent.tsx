import { type PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback, View, type ViewStyle } from 'react-native';
import { KeyboardAvoidingView, KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@jshare/theme';

import { useScreen } from '~/components/Screen/useScreen';

export type ScreenContentProps = {
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    scrollable?: boolean;
    disableTopInset?: boolean;
    disableBottomInset?: boolean;
};

export const ScreenContent = (props: PropsWithChildren<ScreenContentProps>) => {
    const { style, contentStyle, scrollable = false, disableBottomInset, disableTopInset } = props;
    const insets = useSafeAreaInsets();
    const { hasHeader, hasFooter, hasFocus } = useScreen();
    const { theme } = useTheme();

    const bottomInset = hasFooter || disableBottomInset ? 0 : insets.bottom;
    const topInset = hasHeader || disableTopInset ? 0 : insets.top;

    if (scrollable) {
        return (
            <KeyboardAwareScrollView
                style={[{ flex: 1 }, style]}
                contentContainerStyle={[
                    {
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        paddingBottom: bottomInset,
                        paddingTop: topInset,
                    },
                    contentStyle,
                ]}
                extraKeyboardSpace={-1 * bottomInset}
                enabled={hasFocus}
            >
                {props.children}
            </KeyboardAwareScrollView>
        );
    } else {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={theme.spacing.xl}
                    enabled={hasFocus}
                >
                    <View
                        style={[
                            {
                                flex: 1,
                                paddingLeft: insets.left,
                                paddingRight: insets.right,
                                paddingBottom: bottomInset,
                                paddingTop: topInset,
                            },
                            style,
                            contentStyle,
                        ]}
                    >
                        {props.children}
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
};
