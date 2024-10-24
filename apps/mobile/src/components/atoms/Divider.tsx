import { StyleSheet, View } from 'react-native';

import { getSxStyles, useTheme, type SxMarginProps, type Theme } from '@jshare/theme';

export type DividerProps = {
    direction?: 'vertical' | 'horizontal';
    vertical?: boolean;
    horizontal?: boolean;
} & SxMarginProps;

export const Divider = (props: DividerProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
        <View
            style={[
                getSxStyles(props, theme),
                (props.vertical || props.direction === 'vertical') && styles.vertical,
                (props.horizontal || props.direction === 'horizontal') && styles.horizontal,
            ]}
        />
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        vertical: {
            height: '100%',
            width: 1,
            backgroundColor: theme.palette.border.divider,
        },
        horizontal: {
            width: '100%',
            height: 1,
            backgroundColor: theme.palette.border.divider,
        },
    });
};
