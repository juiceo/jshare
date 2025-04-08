import { useCallback, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { merge, partition } from 'lodash';

import type { DB } from '@jshare/db';

import { uploadImage } from '~/lib/images';
import { toast } from '~/state/toast';

export const MediaTypeOptions = ImagePicker.MediaTypeOptions;

export const useImageUpload = (defaultOptions?: ImagePicker.ImagePickerOptions) => {
    const [uploadingCount, setUploadingCount] = useState<number>(0);
    const isUploading = uploadingCount > 0;

    const uploadFiles = useCallback(
        async (
            assets: ImagePicker.ImagePickerAsset[]
        ): Promise<{ uploaded: DB.Image[]; failed: number }> => {
            setUploadingCount((prev) => prev + assets.length);

            const images = await Promise.all(
                assets.map(async (asset) => {
                    return uploadImage(asset).catch((err: any) => {
                        console.error('Image upload failed: ' + err.message);
                        return null;
                    });
                })
            );
            const [uploaded, failed] = partition(images, (image) => !!image);
            setUploadingCount((prev) => prev - assets.length);

            return {
                uploaded,
                failed: failed.length,
            };
        },
        []
    );

    const uploadFromCamera = useCallback(
        async (
            options?: ImagePicker.ImagePickerOptions
        ): Promise<{ uploaded: DB.Image[]; failed: number }> => {
            const permissions = await ImagePicker.requestCameraPermissionsAsync();
            if (!permissions.granted) {
                toast.error('Unable to open camera', 'Permission not granted');
                return { uploaded: [], failed: 0 };
            }
            const result = await ImagePicker.launchCameraAsync(
                merge({}, defaultOptions, options, { base64: true })
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

    const uploadFromLibrary = useCallback(
        async (
            options?: ImagePicker.ImagePickerOptions
        ): Promise<{ uploaded: DB.Image[]; failed: number }> => {
            const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!permissions.granted) {
                toast.error('Unable to open media library', 'Permission not granted');
                return { uploaded: [], failed: 0 };
            }
            const result = await ImagePicker.launchImageLibraryAsync(
                merge({}, defaultOptions, options, { base64: true })
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
