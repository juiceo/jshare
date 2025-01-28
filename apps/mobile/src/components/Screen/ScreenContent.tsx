import { View, type ViewStyle } from 'react-native';
import { KeyboardAvoidingView, KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { ScreenContextType } from '~/components/Screen/ScreenContext';
import { useScreen } from '~/components/Screen/useScreen';

export type ScreenContentProps = {
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    scrollable?: boolean;
    disableTopInset?: boolean;
    disableHeaderOffset?: boolean;
    children: React.ReactNode | ((context: ScreenContextType) => React.ReactNode);
};

export const ScreenContent = (props: ScreenContentProps) => {
    const { style, contentStyle, scrollable = false, disableHeaderOffset, disableTopInset } = props;
    const insets = useSafeAreaInsets();
    const screenContext = useScreen();
    const { hasFooter, hasFocus } = screenContext;

    const bottomInset = hasFooter ? 0 : insets.bottom;
    const topInset = !disableTopInset ? insets.top : 0;
    const headerOffset = !disableHeaderOffset ? screenContext.headerHeight : 0;

    const renderChildren = () => {
        if (typeof props.children === 'function') {
            return props.children(screenContext);
        }
        return props.children;
    };

    if (scrollable) {
        return (
            <KeyboardAwareScrollView
                style={[{ flex: 1, position: 'relative' }, style]}
                contentContainerStyle={[
                    {
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        paddingBottom: bottomInset,
                        paddingTop: topInset + headerOffset,
                    },
                    contentStyle,
                ]}
                extraKeyboardSpace={-1 * bottomInset}
                enabled={hasFocus}
            >
                {renderChildren()}
            </KeyboardAwareScrollView>
        );
    } else {
        return (
            <KeyboardAvoidingView
                style={[
                    {
                        flex: 1,
                        position: 'relative',
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        paddingBottom: bottomInset,
                        paddingTop: topInset + headerOffset,
                    },
                    style,
                    contentStyle,
                ]}
            >
                {renderChildren()}
            </KeyboardAvoidingView>
        );
    }
};
