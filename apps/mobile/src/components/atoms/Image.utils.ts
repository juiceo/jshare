import type { StyleProp, ViewStyle } from 'react-native';
import { ImageSource as ExpoImageSource } from 'expo-image';

import type { SxProps } from '@jshare/theme';

import { getImageUrl } from '~/services/images';

export type ImageSource = ImageSourceID | ExpoImageSource;

export type ImageSourceID = {
    id?: string | null;
};

export type ImageSourceURI = {
    uri?: string | null;
};

export type ImageProps = {
    source: ImageSource;
    fit?: 'cover' | 'contain' | 'fill';
    width?: number;
    height?: number;
    quality?: number;
    darken?: number;
    style?: StyleProp<ViewStyle>;
} & SxProps;

const isIdSource = (source: ImageSource): source is ImageSourceID => {
    return 'id' in source;
};

export const getSourceFromProps = (props: ImageProps): ExpoImageSource => {
    const { source } = props;
    if (isIdSource(source)) {
        const uri = source.id
            ? getImageUrl(source.id, {
                  width: props.width,
                  height: props.height,
                  resize: props.fit,
                  quality: props.quality,
              })
            : undefined;
        return { uri };
    }

    return source;
};
