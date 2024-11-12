import { StyleSheet } from 'react-native';

import { getSxStyles, useTheme, type SxMarginProps, type Theme } from '@jshare/theme';

import { Image } from '~/components/atoms/Image';

export type AvatarProps = {
    imageId: string | null | undefined;
    size: 'sm' | 'md' | 'lg';
} & SxMarginProps;

export const Avatar = (props: AvatarProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const imageSize = (() => {
        switch (props.size) {
            case 'sm':
                return 32;
            case 'md':
                return 64;
            case 'lg':
                return 128;
        }
    })();
    return (
        <Image
            key={props.imageId}
            source={{
                id: props.imageId,
            }}
            width={imageSize}
            height={imageSize}
            style={[styles.avatar, getSxStyles(props, theme)]}
            fit="cover"
            br="full"
            p="xl"
            border="paper"
            bg="background.elevation1"
            darken={0.2}
        />
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        avatar: {
            borderRadius: theme.borderRadius.full,
            borderWidth: 1,
            borderColor: theme.palette.accent.main,
            borderStyle: 'solid',
        },
    });
};
