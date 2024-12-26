import { StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';

import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ChatMessageProps = {
    text: string;
    timestamp: Date;
    color: 'primary' | 'secondary';
};

export const ChatMessage = (props: ChatMessageProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
        <Stack style={styles.wrapper}>
            {props.color === 'primary' && (
                <LinearGradient
                    colors={[theme.palette.primary.main, theme.palette.primary.dark]}
                    style={styles.gradient}
                    start={{ x: 0, y: -1 }}
                    end={{ x: 1, y: 1 }}
                />
            )}
            {props.color === 'secondary' && (
                <LinearGradient
                    colors={[
                        theme.palette.background.elevation2,
                        theme.palette.background.elevation3,
                    ]}
                    style={styles.gradient}
                    start={{ x: 0, y: -1 }}
                    end={{ x: 1, y: 1 }}
                />
            )}
            <Stack style={styles.content}>
                <Typography variant="body1">
                    {props.text}
                    <Box style={styles.textPadding} />
                </Typography>
            </Stack>
            <Stack style={styles.footer}>
                <Typography variant="caption" color="hint">
                    {dayjs(props.timestamp).format('HH:mm')}
                </Typography>
                <Icon name="CheckCheck" size={12} color={(theme) => theme.palette.primary.light} />
            </Stack>
        </Stack>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        wrapper: {
            borderRadius: theme.borderRadius.lg,
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
            position: 'relative',
            minWidth: 40,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: theme.spacing.xs,
            overflow: 'hidden',
        },
        gradient: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        content: {
            paddingTop: theme.spacing.sm,
            paddingHorizontal: theme.spacing.md,
        },
        textPadding: {
            opacity: 0,
            width: 60,
            height: 1,
        },
        footer: {
            position: 'absolute',
            bottom: theme.spacing.xs,
            right: theme.spacing.xs,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            gap: 2,
        },
    });
};
