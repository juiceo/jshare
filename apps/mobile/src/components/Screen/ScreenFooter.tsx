import type { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

import { useScreen } from './useScreen';

export type ScreenFooterProps = {
    padding?: SpacingUnit;
} & ViewProps;

export const ScreenFooter = (props: ScreenFooterProps) => {
    const { style, padding = 'md', ...rest } = props;
    const { theme } = useTheme();
    const { disableBottomInset } = useScreen();
    return (
        <SafeAreaView
            style={[{ flex: 0, padding: theme.spacing[padding] }, style]}
            edges={{
                left: 'additive',
                right: 'additive',
                bottom: disableBottomInset ? 'off' : 'additive',
                top: 'off',
            }}
            {...rest}
        />
    );
};
