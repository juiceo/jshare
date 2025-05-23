import { BorderlessButton } from 'react-native-gesture-handler';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    type SharedValue,
} from 'react-native-reanimated';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type AnimatedTabBarTabProps = {
    name: string;
    index: number;
    activeIndex: SharedValue<number>;
    badge?: number;
    onPress: () => void;
};

export const AnimatedTabBarTab = (props: AnimatedTabBarTabProps) => {
    const { name, onPress } = props;

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                props.activeIndex.value,
                [props.index - 1, props.index, props.index + 1],
                [0.5, 1, 0.5],
                Extrapolation.CLAMP
            ),
        };
    });

    return (
        <BorderlessButton style={{ flex: 1 }} onPress={onPress} activeOpacity={0.8}>
            <Animated.View style={animatedStyles}>
                <Stack row center flex={1} p="md" spacing="md">
                    <Typography variant="h6">{name}</Typography>
                    {!!props.badge && (
                        <Stack
                            center
                            style={{ width: 18, height: 18, borderRadius: 8 }}
                            bg="brand.primary"
                        >
                            <Typography
                                variant="h6"
                                style={{ fontSize: 12, lineHeight: 0 }}
                                color="primary"
                            >
                                {Math.min(props.badge ?? 99)}
                            </Typography>
                        </Stack>
                    )}
                </Stack>
            </Animated.View>
        </BorderlessButton>
    );
};
