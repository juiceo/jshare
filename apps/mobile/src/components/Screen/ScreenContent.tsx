import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

import { useScreen } from '~/components/Screen/useScreen';

export type ScreenContentProps = {
    padding?: SpacingUnit;
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    scrollable?: boolean;
};

export const ScreenContent = (props: PropsWithChildren<ScreenContentProps>) => {
    const { style, contentStyle, padding = 'md', scrollable = false } = props;
    const { theme } = useTheme();
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
                    paddingLeft: theme.spacing[padding] + insets.left,
                    paddingRight: theme.spacing[padding] + insets.right,
                    paddingBottom: theme.spacing[padding] + bottomInset,
                    paddingTop: theme.spacing[padding] + topInset,
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
