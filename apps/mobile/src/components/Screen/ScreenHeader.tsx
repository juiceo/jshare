import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

import { alpha, useTheme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';
import { useScreen } from '~/components/Screen/useScreen';
import { Typography } from '~/components/Typography';

export type ScreenHeaderProps = {
    title: string;
    subtitle?: string;
    backButton?: 'back' | 'down';
    disableInset?: boolean;
    right?: React.ReactNode;
    footer?: React.ReactNode;
    blur?: boolean;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
    const { title, subtitle, backButton = 'back', disableInset, blur, footer, right } = props;
    const { theme } = useTheme();
    const { setHeaderHeight } = useScreen();
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const content = (
        <View
            style={{
                paddingTop: disableInset ? 0 : insets.top,
                position: 'relative',
                zIndex: 1000,
                backgroundColor: alpha(theme.palette.background.main, 0.5),
            }}
        >
            <Stack row px="xl" py="md" spacing="xl">
                <Stack w={40}>
                    {backButton === 'back' && (
                        <IconButton
                            icon="ChevronLeft"
                            size="md"
                            variant="ghost"
                            onPress={router.back}
                        />
                    )}
                    {backButton === 'down' && (
                        <IconButton
                            icon="ChevronDown"
                            size="md"
                            variant="ghost"
                            onPress={router.back}
                        />
                    )}
                </Stack>
                <Stack column flex={1} center>
                    <Typography variant="h4" align="center">
                        {title.trim()}
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
                        borderBottomColor: theme.palette.background.elevation1,
                    }}
                >
                    {content}
                </BlurView>
            ) : (
                <Box
                    bg="background.main"
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: theme.palette.background.elevation1,
                    }}
                >
                    {content}
                </Box>
            )}
            {footer}
        </View>
    );
};
