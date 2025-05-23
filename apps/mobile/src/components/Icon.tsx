import type { StyleProp, ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

import { ColorPath, getColorFromPath, useTheme, type Theme } from '@jshare/theme';

export type IconName = keyof typeof icons;
export const IconList: IconName[] = Object.keys(icons) as IconName[];

export type IconProps = {
    name: IconName;
    color?: ColorPath | (string & {}) | ((theme: Theme) => string);
    size?: number;
    style?: StyleProp<ViewStyle>;
};

export const Icon = (props: IconProps) => {
    const { theme } = useTheme();
    const { name, color = 'text.primary', size = 24, style } = props;
    const LucideIcon = icons[name];

    const _color = (() => {
        if (typeof color === 'function') {
            return color(theme);
        }
        return getColorFromPath(color, theme);
    })();

    return <LucideIcon color={_color} size={size} style={style} />;
};
