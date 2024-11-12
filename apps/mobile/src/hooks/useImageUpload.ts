import { useCallback, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { merge, partition } from 'lodash';

import { uploadImage } from '~/services/images';

export const MediaTypeOptions = ImagePicker.MediaTypeOptions;

export const useImageUpload = (defaultOptions?: ImagePicker.ImagePickerOptions) => {
    const [uploadingCount, setUploadingCount] = useState<number>(0);
    const isUploading = uploadingCount > 0;

    const uploadFiles = useCallback(async (assets: ImagePicker.ImagePickerAsset[]) => {
        setUploadingCount((prev) => prev + assets.length);

        const imageIds = await Promise.all(
            assets.map(async (asset) => {
                try {
                    const { imageId } = await uploadImage({
                        uri: asset.uri,
                        mimeType: asset.mimeType,
                    });

                    return imageId;
                } catch (err: any) {
                    console.error('Image upload failed: ' + err.message);
                    return null;
                }
            })
        );
        const [uploaded, failed] = partition(imageIds, (id) => !!id);
        setUploadingCount((prev) => prev - assets.length);

        return {
            uploaded,
            failed,
        };
    }, []);

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
