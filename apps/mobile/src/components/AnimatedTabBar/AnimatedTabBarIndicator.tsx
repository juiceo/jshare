import type { TabBarProps } from 'react-native-collapsible-tab-view';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useTheme } from '@jshare/theme';

export const AnimatedTabBarIndicator = (props: TabBarProps<any>) => {
    const { theme } = useTheme();

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX:
                        (props.indexDecimal.value * (props.width ?? 0)) / props.tabNames.length,
                },
            ],
        };
    });
    return (
        <Animated.View
            style={[
                style,
                {
                    width: (props.width ?? 0) / props.tabNames.length,
                    height: 2,
                    backgroundColor: theme.palette.brand.secondary,
                },
            ]}
        />
    );
};
