import { Text, type TextProps, type TextStyle } from 'react-native';

import {
    getSxStyles,
    getTextColorFromPath,
    useTheme,
    type PrimaryColorPath,
    type SxProps,
    type TextColorVariant,
    type TypographyVariant,
} from '@jshare/theme';

export type TypographyProps = {
    variant?: TypographyVariant;
    color?: TextColorVariant | PrimaryColorPath;
    align?: TextStyle['textAlign'];
    strikeThrough?: boolean;
} & TextProps &
    SxProps;

export const Typography = (props: TypographyProps) => {
    const { variant = 'body1', color = 'primary', align, style, strikeThrough, ...rest } = props;
    const { theme } = useTheme();
    return (
        <Text
            style={[
                {
                    ...theme.typography[variant],
                    color: getTextColorFromPath(color, theme),
                    textAlign: align,
                    textDecorationLine: strikeThrough ? 'line-through' : undefined,
                },
                getSxStyles(rest, theme),
                style,
            ]}
            {...rest}
        />
    );
};
