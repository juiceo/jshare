import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { useTheme, type TextColor, type TypographyVariant } from '@jshare/theme';

export type TypographyProps = {
    variant: TypographyVariant;
    color: keyof TextColor;
};

export const Typography = (props: PropsWithChildren<TypographyProps>) => {
    const { variant, color } = props;
    const { theme } = useTheme();
    return (
        <Text style={{ ...theme.typography[variant], color: theme.palette.text[color] }}>
            {props.children}
        </Text>
    );
};
