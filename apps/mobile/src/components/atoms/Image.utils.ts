import type { StyleProp, ViewStyle } from 'react-native';
import { ImageSource as ExpoImageSource } from 'expo-image';

import type { DB } from '@jshare/db';
import type { SxProps } from '@jshare/theme';

import { getImageUrl } from '~/lib/images';

export type ImageProps = {
    image?: DB.Image | null;
    source?: ExpoImageSource | null;
    fit?: 'cover' | 'contain' | 'fill';
    width?: number;
    height?: number;
    quality?: number;
    darken?: number;
    style?: StyleProp<ViewStyle>;
} & SxProps;

export const getSourceFromProps = (props: ImageProps): ExpoImageSource => {
    const { image, source } = props;
    if (image) {
        return {
            blurhash: image.blurhash ?? undefined,
            uri: getImageUrl(image, {
                width: props.width,
                height: props.height,
                resize: props.fit,
                quality: props.quality,
            }),
        };
    }

    if (source) return source;

    return { uri: undefined };
};
