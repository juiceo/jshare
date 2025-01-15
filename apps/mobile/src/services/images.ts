import uuid from 'react-native-uuid';
import type { ImagePickerAsset } from 'expo-image-picker';
import { clamp } from 'lodash';

import { Image as ImageType } from '@jshare/db/models';

import { supabase } from '~/services/supabase';
import { trpcUniversal } from '~/services/trpc';

const SUPABASE_BUCKET_NAME = 'uploads';

export const uploadImage = async (asset: ImagePickerAsset): Promise<ImageType> => {
    const response = await fetch(asset.uri);
    const blob = await response.blob();
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const path = uuid.v4();
    const supabaseImage = await supabase.storage
        .from(SUPABASE_BUCKET_NAME)
        .upload(path, arrayBuffer, {
            contentType: asset.mimeType,
        });

    if (!supabaseImage.data) {
        throw new Error(supabaseImage.error.message);
    }

    const dbImage = await trpcUniversal.images.create.mutate({
        path,
        bucket: SUPABASE_BUCKET_NAME,
    });

    return dbImage;
};

export const getImageUrl = (
    image: ImageType,
    transform?: {
        width?: number;
        height?: number;
        resize?: 'cover' | 'contain' | 'fill';
        quality?: number;
    }
): string => {
    return supabase.storage.from(image.bucket).getPublicUrl(image.path, {
        transform: {
            ...transform,
            width: transform?.width ? Math.round(transform.width) : undefined,
            height: transform?.height ? Math.round(transform.height) : undefined,
            quality: transform?.quality ? clamp(30, 100, transform.quality) : undefined,
        },
    }).data.publicUrl;
};

export const getHeightFromRatio = (width: number, aspectRatio: [number, number]): number => {
    return (width / aspectRatio[0]) * aspectRatio[1];
};

export const getWidthFromRatio = (height: number, aspectRatio: [number, number]): number => {
    return (height / aspectRatio[1]) * aspectRatio[0];
};
