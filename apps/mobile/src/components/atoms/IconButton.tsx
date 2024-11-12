import { Pressable } from 'react-native';

import { useTheme } from '@jshare/theme';

import Icon, { type IconName } from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';

export type IconButtonProps = {
    icon: IconName;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'contained' | 'ghost';
    onPress?: () => void;
};

export const IconButton = (props: IconButtonProps) => {
    const { onPress, icon, size = 'md', variant = 'contained' } = props;
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
    const iconSize = (() => {
        switch (size) {
            case 'sm':
                return 16;
            case 'md':
                return variant === 'contained' ? 16 : 24;
            case 'lg':
                return 24;
        }
    })();
    const buttonBackground = (() => {
        switch (variant) {
            case 'contained': {
                return theme.palette.background.elevation1;
            }
            case 'ghost': {
                return 'transparent';
            }
        }
    })();
    return (
        <Pressable onPress={onPress}>
            <Stack
                height={buttonSize}
                width={buttonSize}
                style={{ backgroundColor: buttonBackground }}
                br="xl"
                center
            >
                <Icon name={icon} size={iconSize} />
            </Stack>
        </Pressable>
    );
};
