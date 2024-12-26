import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';

export type ChatMessageGroupProps = {
    foo?: string;
};

export const ChatMessageGroup = (props: PropsWithChildren<ChatMessageGroupProps>) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
        <Stack style={styles.wrapper}>
            <Box style={styles.messages}>{props.children}</Box>
            <Box style={styles.avatar}>
                <Box
                    style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'gray' }}
                ></Box>
            </Box>
        </Stack>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: theme.spacing.sm,
        },
        messages: {
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 2,
            flex: 1,
        },
        avatar: {
            width: 40,
        },
    });
};
