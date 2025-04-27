import uuid from 'react-native-uuid';
import type { ImagePickerAsset } from 'expo-image-picker';
import { clamp } from 'lodash';

import { SupabaseStorageBucket } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Images } from '~/lib/collections/images.collection';
import { supabase } from '~/lib/supabase';
import { trpcClient } from '~/lib/trpc';

export const uploadImage = async (asset: ImagePickerAsset): Promise<DB.Image> => {
    const response = await fetch(asset.uri);
    const blob = await response.blob();
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const path = uuid.v4();
    const supabaseImage = await supabase.storage
        .from(SupabaseStorageBucket.Public)
        .upload(path, arrayBuffer, {
            contentType: asset.mimeType,
        });

    if (!supabaseImage.data) {
        throw new Error(supabaseImage.error.message);
    }

    const dbImage = await trpcClient.images.create.mutate({
        path,
        bucket: SupabaseStorageBucket.Public,
    });

    Images.registerDocuments(dbImage);

    return dbImage;
};

export const getImageUrl = (
    image: Pick<DB.Image, 'bucket' | 'path'>,
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
