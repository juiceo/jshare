import type { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme, type SpacingUnit } from '@jshare/theme';

import { useScreen } from './useScreen';

export type ScreenHeaderProps = {
    padding: SpacingUnit;
} & ViewProps;

export const ScreenHeader = (props: ScreenHeaderProps) => {
    const { style, padding = 'md', ...rest } = props;
    const { theme } = useTheme();
    const { enableTopInset } = useScreen();
    return (
        <SafeAreaView
            style={[{ flex: 0, padding: theme.spacing[padding] }, style]}
            edges={{
                top: enableTopInset ? 'additive' : 'off',
                left: 'additive',
                right: 'additive',
            }}
            {...rest}
        />
    );
};
