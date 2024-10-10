import { Text, type TextProps } from 'react-native';

import {
    getSxStyles,
    useTheme,
    type SxProps,
    type TextColor,
    type TypographyVariant,
} from '@jshare/theme';

export type TypographyProps = {
    variant: TypographyVariant;
    color: keyof TextColor;
} & TextProps &
    SxProps;

export const Typography = (props: TypographyProps) => {
    const { variant, color, style, ...rest } = props;
    const { theme } = useTheme();
    return (
        <Text
            style={[
                { ...theme.typography[variant], color: theme.palette.text[color] },
                getSxStyles(rest, theme),
                style,
            ]}
            {...rest}
        />
    );
};
