import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useScreen } from '~/components/Screen/useScreen';

export type ScreenContentProps = {
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    scrollable?: boolean;
};

export const ScreenContent = (props: PropsWithChildren<ScreenContentProps>) => {
    const { style, contentStyle, scrollable = false } = props;
    const insets = useSafeAreaInsets();
    const { hasFooter, enableTopInset, disableBottomInset } = useScreen();

    const bottomInset = hasFooter || disableBottomInset ? 0 : insets.bottom;
    const topInset = !enableTopInset ? 0 : insets.top;

    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1 }, style]}
            scrollEnabled={scrollable}
            contentContainerStyle={[
                {
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                    paddingBottom: bottomInset,
                    paddingTop: topInset,
                },
                !scrollable && { flex: 1 },
                contentStyle,
            ]}
            extraKeyboardSpace={-1 * bottomInset}
        >
            {props.children}
        </KeyboardAwareScrollView>
    );
};
