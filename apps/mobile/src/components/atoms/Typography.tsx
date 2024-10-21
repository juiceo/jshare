import { Text, type TextProps, type TextStyle } from 'react-native';

import {
    getSxStyles,
    getTextColorFromPath,
    useTheme,
    type BackgroundColorPath,
    type SxProps,
    type TextColorVariant,
    type TypographyVariant,
} from '@jshare/theme';

export type TypographyProps = {
    variant?: TypographyVariant;
    color?: TextColorVariant | BackgroundColorPath;
    align?: TextStyle['textAlign'];
    weight?: TextStyle['fontWeight'];
} & TextProps &
    SxProps;

export const Typography = (props: TypographyProps) => {
    const { variant = 'body1', color = 'primary', align, style, ...rest } = props;
    const { theme } = useTheme();
    return (
        <Text
            style={[
                {
                    ...theme.typography[variant],
                    color: getTextColorFromPath(color, theme),
                    textAlign: align,
                },
                getSxStyles(rest, theme),
                style,
            ]}
            {...rest}
        />
    );
};
