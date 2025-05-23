import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import { useTheme, type Theme } from '@jshare/theme';

export type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
};

export const Switch = (props: SwitchProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    const checkedSv = useSharedValue(props.checked ? 100 : 0);

    const handleChange = () => {
        const newValue = !props.checked;
        checkedSv.value = withSpring(newValue ? 100 : 0, { stiffness: 1000, damping: 100 });

        props.onChange(!props.checked);
    };

    const animatedRootStyle = useAnimatedStyle(() => {
        if (props.disabled)
            return {
                backgroundColor: 'rgba(255,255,255,0.1)',
            };
        return {
            backgroundColor: interpolateColor(
                checkedSv.value,
                [0, 100],
                ['rgba(255,255,255,0.1)', theme.palette.brand.primary]
            ),
        };
    }, [props.disabled]);

    const animatedHandleStyle = useAnimatedStyle(() => {
        return {
            opacity: props.disabled ? 0.5 : interpolate(checkedSv.value, [0, 100], [0.5, 1]),
            transform: [
                {
                    translateX: interpolate(checkedSv.value, [0, 100], [0, 32]),
                },
            ],
        };
    }, [props.disabled]);

    return (
        <RectButton onPress={handleChange} enabled={!props.disabled}>
            <Animated.View style={[animatedRootStyle, styles.root]}>
                <Animated.View style={[animatedHandleStyle, styles.handle]} />
            </Animated.View>
        </RectButton>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        root: {
            width: 64,
            height: 32,
            borderRadius: 16,
            padding: 2,
        },
        handle: {
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: '#ddd',
        },
    });
};
