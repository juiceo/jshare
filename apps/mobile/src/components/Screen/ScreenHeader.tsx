import { Keyboard, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

import { alpha, useTheme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';
import { OFFLINE_INDICATOR_HEIGHT } from '~/components/OfflineIndicator';
import { useScreen } from '~/components/Screen/useScreen';
import { Typography } from '~/components/Typography';

export type ScreenHeaderProps = {
    title: string;
    subtitle?: string;
    backButton?: 'back' | 'down';
    right?: React.ReactNode;
    footer?: React.ReactNode;
    blur?: boolean;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
    const { title, subtitle, backButton = 'back', blur, footer, right } = props;
    const { theme } = useTheme();
    const { setHeaderHeight, connectedSv, isModal } = useScreen();
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const handleBack = () => {
        Keyboard.dismiss();
        router.back();
    };

    const wrapperStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        connectedSv.value,
                        [0, 1],
                        [OFFLINE_INDICATOR_HEIGHT, 0]
                    ),
                },
            ],
        };
    });

    const content = (
        <View
            style={{
                paddingTop: isModal ? 0 : insets.top,
                position: 'relative',
                zIndex: 1000,
                backgroundColor: alpha(theme.palette.background.primary, 0.5),
            }}
        >
            <Stack row px="xl" py="md" spacing="xl">
                <Stack w={40}>
                    {backButton === 'back' && (
                        <IconButton
                            icon="ChevronLeft"
                            size="md"
                            variant="ghost"
                            onPress={handleBack}
                        />
                    )}
                    {backButton === 'down' && (
                        <IconButton
                            icon="ChevronDown"
                            size="md"
                            variant="ghost"
                            onPress={handleBack}
                        />
                    )}
                </Stack>
                <Stack column flex={1} center>
                    <Typography
                        variant="h4"
                        align="center"
                        style={{ lineHeight: 0 }}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="caption" color="hint" align="center">
                            {subtitle}
                        </Typography>
                    )}
                </Stack>
                <Stack w={40}>{right}</Stack>
            </Stack>
        </View>
    );

    return (
        <Animated.View style={[{ zIndex: 100 }, wrapperStyle]}>
            <View
                onLayout={(event) => {
                    setHeaderHeight(event.nativeEvent.layout.height);
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                }}
            >
                {blur ? (
                    <BlurView
                        intensity={65}
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: theme.palette.border.tertiary,
                        }}
                    >
                        {content}
                    </BlurView>
                ) : (
                    <Box
                        bg="background.primary"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: theme.palette.border.tertiary,
                        }}
                    >
                        {content}
                    </Box>
                )}
                {footer}
            </View>
        </Animated.View>
    );
};
