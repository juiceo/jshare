import { useState } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';

import type { DB } from '@jshare/types';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { ImageUploadMenu } from '~/components/ImageUploadMenu/ImageUploadMenu';
import { Typography } from '~/components/Typography';
import { MediaTypeOptions, useImageUpload } from '~/hooks/useImageUpload';

export type ImageUploaderProps = {
    value: DB.Image | null | undefined;
    onChange: (value: DB.Image | null) => void;
    aspectRatio: [number, number];
    placeholder?: string;
};

export const ImageUploader = (props: ImageUploaderProps) => {
    const { value, onChange, aspectRatio = [16, 9], placeholder } = props;
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const imageUpload = useImageUpload({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: aspectRatio,
        quality: 0.2,
        selectionLimit: 1,
        base64: true,
        allowsMultipleSelection: false,
    });

    return (
        <>
            <Pressable onPress={() => setMenuOpen(true)}>
                <Stack
                    bg="background.elevation1"
                    br="md"
                    style={{
                        width: '100%',
                        aspectRatio: `${aspectRatio[0]}/${aspectRatio[1]}`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {!value && <EmptyPlaceholder text={placeholder ?? 'Upload an image'} />}
                    {imageUpload.isUploading && <LoadingOverlay />}
                    <Image
                        key={value?.id}
                        image={value}
                        quality={50}
                        style={[
                            {
                                width: '100%',
                                aspectRatio: `${aspectRatio[0]}/${aspectRatio[1]}`,
                            },
                        ]}
                        fit="cover"
                    />
                </Stack>
            </Pressable>
            <ImageUploadMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                canRemove={!!value}
                onSelect={(option) => {
                    switch (option) {
                        case 'library':
                            return imageUpload.uploadFromLibrary().then(({ uploaded }) => {
                                onChange(uploaded[0] ?? null);
                            });
                        case 'camera':
                            return imageUpload
                                .uploadFromCamera()
                                .then(({ uploaded }) => onChange(uploaded[0] ?? null));
                        case 'remove':
                            return onChange(null);
                    }
                }}
            />
        </>
    );
};

const EmptyPlaceholder = (props: { text: string }) => {
    return (
        <Stack center spacing="md" h="100%" w="100%">
            <Icon name="ImagePlus" />
            <Typography variant="button">{props.text}</Typography>
        </Stack>
    );
};

const LoadingOverlay = () => {
    return (
        <Stack center absoluteFill style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <ActivityIndicator />
        </Stack>
    );
};
