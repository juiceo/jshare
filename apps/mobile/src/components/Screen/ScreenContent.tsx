import { View, type ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { OFFLINE_INDICATOR_HEIGHT } from '~/components/OfflineIndicator';
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
    const { hasFooter, hasFocus, connectedSv } = screenContext;

    const bottomInset = hasFooter ? 0 : insets.bottom;
    const topInset = !disableTopInset ? insets.top : 0;
    const headerOffset = !disableHeaderOffset ? screenContext.headerHeight : 0;

    const wrapperStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        connectedSv.value,
                        [0, 1],
                        [OFFLINE_INDICATOR_HEIGHT, 0]
                    ),
                },
            ],
        };
    });

    const renderChildren = () => {
        if (typeof props.children === 'function') {
            return props.children(screenContext);
        }
        return props.children;
    };

    const content = scrollable ? (
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
    ) : (
        <View
            style={[
                {
                    flex: 1,
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
        </View>
    );

    return <Animated.View style={[{ flex: 1 }, wrapperStyle]}>{content}</Animated.View>;
};
