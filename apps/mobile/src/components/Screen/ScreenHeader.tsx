import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';

export type ScreenHeaderProps = {
    title: string;
    backButton?: 'back' | 'down';
    bordered?: boolean;
    disableInset?: boolean;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
    const { title, backButton = 'back', bordered, disableInset } = props;
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = getStyles(theme);
    const router = useRouter();
    return (
        <Box style={{ paddingTop: disableInset ? 0 : insets.top }}>
            <Stack row p="xl" spacing="xl" style={[bordered ? styles.bordered : undefined]}>
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
                </Stack>
                <Stack w={40}></Stack>
            </Stack>
        </Box>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        bordered: {
            borderBottomWidth: 1,
            borderBottomColor: theme.palette.border.divider,
        },
    });
};
