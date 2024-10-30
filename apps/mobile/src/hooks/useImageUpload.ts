import { useCallback, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { merge } from 'lodash';

import { supabase } from '~/services/supabase';
import { useSession } from '~/wrappers/SessionProvider';

export type UseImageUploadArgs = {
    bucket: 'avatars';
    defaultOptions?: ImagePicker.ImagePickerOptions;
};

export const useImageUpload = (args: UseImageUploadArgs) => {
    const { defaultOptions, bucket } = args;
    const { session } = useSession();
    const [uploadingCount, setUploadingCount] = useState<number>(0);
    const isUploading = uploadingCount > 0;

    const uploadFiles = useCallback(
        async (assets: ImagePicker.ImagePickerAsset[]) => {
            setUploadingCount((prev) => prev + assets.length);

            const urls = await Promise.all(
                assets.map(async (asset) => {
                    try {
                        const fetchResponse = await fetch(asset.uri);
                        const blob = await fetchResponse.blob();
                        const arrayBuffer = await new Response(blob).arrayBuffer();
                        const imageId = `${session?.user.id ?? 'anon'}_${Math.random().toString(36)}`;
                        const image = await supabase.storage
                            .from(bucket)
                            .upload(imageId, arrayBuffer, {
                                contentType: asset.mimeType,
                            });
                        if (image.data) {
                            const url = await supabase.storage.from(bucket).getPublicUrl(imageId);
                            return url.data.publicUrl;
                        } else {
                            return null;
                        }
                    } catch (err: any) {
                        console.error('Image upload failed: ' + err.message);
                        return null;
                    }
                })
            );
            setUploadingCount((prev) => prev - assets.length);

            return {
                uploaded: urls.filter((url) => !!url),
                failed: urls.filter((url) => url === null).length,
            };
        },
        [bucket, session?.user.id]
    );

    const uploadFromCamera = useCallback(
        async (options?: ImagePicker.ImagePickerOptions) => {
            const result = await ImagePicker.launchCameraAsync(merge({}, defaultOptions, options));

            if (result.canceled || !result.assets.length) {
                return {
                    uploaded: [],
                    failed: 0,
                };
            }

            return uploadFiles(result.assets);
        },
        [defaultOptions, uploadFiles]
    );

    const uploadFromLibrary = useCallback(
        async (options?: ImagePicker.ImagePickerOptions) => {
            const result = await ImagePicker.launchImageLibraryAsync(
                merge({}, defaultOptions, options)
            );

            if (result.canceled || !result.assets.length) {
                return {
                    uploaded: [],
                    failed: 0,
                };
            }

            return uploadFiles(result.assets);
        },
        [defaultOptions, uploadFiles]
    );

    return {
        uploadFromCamera,
        uploadFromLibrary,
        isUploading,
        uploadingCount,
    };
};
