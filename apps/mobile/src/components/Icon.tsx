import type { StyleProp, ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

import { useTheme, type Theme } from '@jshare/theme';

export type IconName = keyof typeof icons;
export const IconList: IconName[] = Object.keys(icons) as IconName[];

export type IconProps = {
    name: IconName;
    color?: string | ((theme: Theme) => string);
    size?: number;
    style?: StyleProp<ViewStyle>;
};

export const Icon = (props: IconProps) => {
    const { theme } = useTheme();
    const { name, color = theme.palette.text.primary, size = 24, style } = props;
    const LucideIcon = icons[name];

    return (
        <LucideIcon
            color={typeof color === 'string' ? color : color(theme)}
            size={size}
            style={style}
        />
    );
};
