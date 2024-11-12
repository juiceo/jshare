import { View, type ViewProps } from 'react-native';

import { getSxStyles, useTheme, type SxProps } from '@jshare/theme';

export type BoxProps = ViewProps & SxProps;

export const Box = (props: BoxProps) => {
    const { style, ...rest } = props;
    const { theme } = useTheme();
    return <View style={[getSxStyles(rest, theme), style]} {...rest} />;
};
