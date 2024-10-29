import type { StyleProp, ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

import { useTheme } from '@jshare/theme';

export type IconProps = {
    name: keyof typeof icons;
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
};

const Icon = (props: IconProps) => {
    const { theme } = useTheme();
    const { name, color = theme.palette.text.primary, size = 24, style } = props;
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size} style={style} />;
};

export default Icon;
