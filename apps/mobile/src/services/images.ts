import uuid from 'react-native-uuid';
import { clamp } from 'lodash';

import { supabase } from '~/services/supabase';

const SUPABASE_BUCKET_NAME = 'uploads';

export const uploadImage = async (args: {
    uri: string;
    mimeType?: string;
}): Promise<{ imageId: string }> => {
    const fetchResponse = await fetch(args.uri);
    const blob = await fetchResponse.blob();
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const imageId = 'test_' + uuid.v4();
    const image = await supabase.storage.from(SUPABASE_BUCKET_NAME).upload(imageId, arrayBuffer, {
        contentType: args.mimeType,
    });

    if (!image.data) {
        throw new Error(image.error.message);
    }

    return {
        imageId,
    };
};

export const getImageUrl = (
    id: string,
    transform?: {
        width?: number;
        height?: number;
        resize?: 'cover' | 'contain' | 'fill';
        quality?: number;
    }
): string => {
    return supabase.storage.from(SUPABASE_BUCKET_NAME).getPublicUrl(id, {
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
