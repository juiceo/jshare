import { RectButton } from 'react-native-gesture-handler';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Icon, type IconName } from '~/components/Icon';

export type IconButtonProps = {
    icon: IconName;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'contained' | 'ghost';
    color?: 'primary' | 'secondary' | 'error';
    rounded?: boolean;
    disabled?: boolean;
    onPress?: () => void;
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
    } = props;
    const { theme } = useTheme();
    const buttonSize = (() => {
        switch (size) {
            case 'sm':
                return 32;
            case 'md':
                return 48;
            case 'lg':
                return 64;
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
                height: buttonSize,
                width: buttonSize,
                backgroundColor: variant === 'contained' ? primaryColor : 'transparent',
                borderRadius: rounded ? buttonSize / 2 : theme.borderRadius.xl,
                opacity: props.disabled ? 0.5 : 1,
            }}
            enabled={!disabled}
        >
            <Stack center flex={1}>
                <Icon name={icon} size={buttonSize / 2} color={iconColor} />
            </Stack>
        </RectButton>
    );
};
