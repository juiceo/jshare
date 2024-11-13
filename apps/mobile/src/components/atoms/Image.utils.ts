import type { StyleProp, ViewStyle } from 'react-native';
import { ImageSource as ExpoImageSource } from 'expo-image';

import type { SxProps } from '@jshare/theme';

import { getImageUrl } from '~/services/images';
import type { DbImage } from '~/types/db';

export type ImageProps = {
    image: DbImage | null | undefined;
    fit?: 'cover' | 'contain' | 'fill';
    width?: number;
    height?: number;
    quality?: number;
    darken?: number;
    style?: StyleProp<ViewStyle>;
} & SxProps;

export const getSourceFromProps = (props: ImageProps): ExpoImageSource => {
    const { image } = props;
    if (!image) return { uri: undefined };
    return {
        uri: getImageUrl(image, {
            width: props.width,
            height: props.height,
            resize: props.fit,
            quality: props.quality,
        }),
    };
};
