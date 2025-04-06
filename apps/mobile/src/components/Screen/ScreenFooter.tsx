import { View, type ViewProps } from 'react-native';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

export type ScreenFooterProps = {
    sticky?: boolean;
} & ViewProps;

export const ScreenFooter = (props: ScreenFooterProps) => {
    const { style, sticky = false, ...rest } = props;
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            edges={{
                left: 'additive',
                right: 'additive',
                bottom: 'additive',
                top: 'off',
            }}
            {...rest}
        >
            {sticky ? (
                <KeyboardStickyView
                    style={[
                        {
                            padding: theme.spacing.xl,
                            paddingBottom: 0,
                            borderTopWidth: 1,
                            borderTopColor: theme.palette.background.elevation1,
                        },
                        style,
                    ]}
                    offset={{
                        closed: 0,
                        opened: insets.bottom,
                    }}
                >
                    {props.children}
                </KeyboardStickyView>
            ) : (
                <View
                    style={[
                        {
                            padding: theme.spacing.xl,
                            paddingBottom: 0,
                            borderTopWidth: 1,
                            borderTopColor: theme.palette.background.elevation1,
                        },
                        style,
                    ]}
                >
                    {props.children}
                </View>
            )}
        </SafeAreaView>
    );
};
