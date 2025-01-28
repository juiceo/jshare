import { RectButton } from 'react-native-gesture-handler';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Icon, type IconName } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type IconButtonProps = {
    icon: IconName;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'contained' | 'ghost';
    color?: 'primary' | 'secondary' | 'error' | 'success';
    rounded?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    text?: string;
    textPos?: 'left' | 'right' | 'top' | 'bottom';
};

export const IconButton = (props: IconButtonProps) => {
    const {
        onPress,
        icon,
        color = 'primary',
        size = 'md',
        variant = 'contained',
        rounded,
        disabled,
        text,
        textPos = 'left',
    } = props;
    const { theme } = useTheme();
    const buttonSize = (() => {
        switch (size) {
            case 'sm':
                return 28;
            case 'md':
                return 36;
            case 'lg':
                return 44;
        }
    })();

    const primaryColor = (() => {
        switch (color) {
            case 'primary': {
                return variant === 'contained'
                    ? theme.palette.primary.main
                    : theme.palette.primary.light;
            }
            case 'secondary': {
                return variant === 'contained'
                    ? theme.palette.background.elevation1
                    : theme.palette.text.secondary;
            }
            case 'error': {
                return variant === 'contained'
                    ? theme.palette.error.main
                    : theme.palette.error.light;
            }
            case 'success': {
                return variant === 'contained'
                    ? theme.palette.success.main
                    : theme.palette.success.light;
            }
        }
    })();

    const iconColor = (() => {
        if (variant === 'contained') return theme.palette.text.primary;
        return primaryColor;
    })();

    return (
        <RectButton
            onPress={onPress}
            activeOpacity={0.1}
            underlayColor={variant === 'contained' ? 'white' : primaryColor}
            style={{
                backgroundColor: variant === 'contained' ? primaryColor : 'transparent',
                borderRadius: rounded ? buttonSize / 2 : theme.borderRadius.xl,
                opacity: props.disabled ? 0.5 : 1,
                padding: theme.spacing.sm,
            }}
            enabled={!disabled}
        >
            <Stack
                center
                row={textPos === 'left'}
                rowReverse={textPos === 'right'}
                column={textPos === 'top'}
                columnReverse={textPos === 'bottom'}
                spacing="sm"
            >
                {text && (
                    <Typography variant="buttonSmall" style={{ color: iconColor }}>
                        {text}
                    </Typography>
                )}
                <Icon name={icon} size={buttonSize / 1.5} color={iconColor} />
            </Stack>
        </RectButton>
    );
};
