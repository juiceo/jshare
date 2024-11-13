import { encode } from 'blurhash';

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
        const uIntArray = new Uint8ClampedArray(arrayBuffer);

        return encode(uIntArray, 32, 32, 4, 4);
    } catch (err: any) {
        console.error('Error generating blurhash: ' + err.message);
        return null;
    }
};
