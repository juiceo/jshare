import type { ViewProps } from 'react-native';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

import { useScreen } from '~/components/Screen/useScreen';

export type ScreenFooterProps = {
    padding?: SpacingUnit;
    sticky?: boolean;
} & ViewProps;

export const ScreenFooter = (props: ScreenFooterProps) => {
    const { style, padding = 'md', sticky = false, ...rest } = props;
    const { theme } = useTheme();
    const { disableBottomInset } = useScreen();
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            edges={{
                left: 'additive',
                right: 'additive',
                bottom: disableBottomInset ? 'off' : 'additive',
                top: 'off',
            }}
            {...rest}
        >
            {sticky ? (
                <KeyboardStickyView
                    style={[{ padding: theme.spacing[padding] }, style]}
                    offset={{
                        closed: 0,
                        opened: insets.bottom,
                    }}
                >
                    {props.children}
                </KeyboardStickyView>
            ) : (
                props.children
            )}
        </SafeAreaView>
    );
};
