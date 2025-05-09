import { useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { InfoSheet } from '~/components/InfoSheet';
import { useScreen } from '~/components/Screen/useScreen';
import { Typography } from '~/components/Typography';

export const OFFLINE_INDICATOR_HEIGHT = 24;

export const OfflineIndicator = observer(() => {
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();
    const { connectedSv, isModal } = useScreen();
    const [showInfo, setShowInfo] = useState<boolean>(false);

    const FULL_HEIGHT = insets.top + OFFLINE_INDICATOR_HEIGHT;

    const wrapperStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(connectedSv.value, [0, 1], [0, -FULL_HEIGHT]),
                },
            ],
        };
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(connectedSv.value, [0, 1], [1, 0]),
        };
    });

    return (
        <>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                <Animated.View
                    style={[
                        {
                            backgroundColor: theme.palette.background.default,
                            height: (isModal ? 0 : insets.top) + OFFLINE_INDICATOR_HEIGHT,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1000,
                        },
                        wrapperStyle,
                    ]}
                >
                    <Animated.View style={[textStyle, { flex: 1 }]}>
                        <Stack flex={1} column alignCenter justifyEnd px="md">
                            <Typography
                                align="center"
                                variant="caption"
                                onPress={() => setShowInfo(true)}
                                h={24}
                            >
                                No internet. Using{' '}
                                <Text
                                    style={{
                                        textDecorationLine: 'underline',
                                        marginLeft: 4,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    offline mode
                                </Text>
                            </Typography>
                        </Stack>
                    </Animated.View>
                </Animated.View>
            </View>
            <InfoSheet
                isOpen={showInfo}
                onClose={() => setShowInfo(false)}
                title="Offline mode"
                description="When you're offline, you can still use most features of the app as normal. Any changes you make will be saved on your device and synced when you're back online."
            />
        </>
    );
});
