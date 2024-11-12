import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { getSxStyles, useTheme, type SxMarginProps, type Theme } from '@jshare/theme';

import { getImageUrl } from '~/services/images';

export type AvatarProps = {
    imageId: string | null | undefined;
    size: 'sm' | 'md' | 'lg';
} & SxMarginProps;

export const Avatar = (props: AvatarProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
        <Image
            key={props.imageId}
            source={
                props.imageId
                    ? {
                          uri: getImageUrl(props.imageId, {
                              width: 128,
                              height: 128,
                              resize: 'cover',
                          }),
                      }
                    : null
            }
            style={[
                styles.avatar,
                props.size === 'sm' && styles.sizeSm,
                props.size === 'md' && styles.sizeMd,
                props.size === 'lg' && styles.sizeLg,
                getSxStyles(props, theme),
            ]}
            contentFit="cover"
        />
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        avatar: {
            borderRadius: theme.borderRadius.full,
            borderWidth: 1,
            borderColor: theme.palette.border.paper,

            borderStyle: 'solid',
        },
        sizeSm: {
            width: 32,
            height: 32,
        },
        sizeMd: {
            width: 64,
            height: 64,
        },
        sizeLg: {
            width: 128,
            height: 128,
        },
    });
};
