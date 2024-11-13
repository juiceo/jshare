import { encode } from 'blurhash';
import sharp from 'sharp';

import { supabase } from './supabase';

export const downloadImage = async (args: {
    path: string;
    bucket: string;
}): Promise<Blob | null> => {
    const image = await supabase.storage.from(args.bucket).download(args.path, {
        transform: {
            width: 32,
            height: 32,
        },
    });

    return image.data;
};

export const generateBlurhash = async (image: Blob): Promise<string | null> => {
    try {
        const arrayBuffer = await image.arrayBuffer();
        const resizedImage = await sharp(arrayBuffer).resize(32, 32).ensureAlpha().raw().toBuffer({
            resolveWithObject: true,
        });
        const uIntArray = new Uint8ClampedArray(resizedImage.data);
        return encode(uIntArray, resizedImage.info.width, resizedImage.info.height, 4, 4);
    } catch (err: any) {
        console.error('Error generating blurhash: ' + err.message);
        return null;
    }
};
