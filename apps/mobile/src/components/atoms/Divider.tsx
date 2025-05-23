import { StyleSheet, View } from 'react-native';

import {
    getColorFromPath,
    getSxStyles,
    useTheme,
    type BackgroundColorPath,
    type BorderColorPath,
    type SxMarginProps,
    type Theme,
} from '@jshare/theme';

export type DividerProps = {
    direction?: 'vertical' | 'horizontal';
    vertical?: boolean;
    horizontal?: boolean;
    color?: BackgroundColorPath | BorderColorPath;
} & SxMarginProps;

export const Divider = (props: DividerProps) => {
    const { color = 'border.primary' } = props;
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
        <View
            style={[
                getSxStyles(props, theme),
                { backgroundColor: getColorFromPath(color, theme) },
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
        },
        horizontal: {
            width: '100%',
            height: 1,
        },
    });
};
