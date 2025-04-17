import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { skipToken, useQuery } from '@tanstack/react-query';

import { getUserDefaultAvatarUrl } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { ImageUploadMenu } from '~/components/ImageUploadMenu/ImageUploadMenu';
import { MediaTypeOptions, useImageUpload } from '~/hooks/useImageUpload';
import { useTRPC } from '~/lib/trpc';

export type AvatarPickerProps = {
    value: string | null;
    onChange: (value: string | null) => void;
    profile?: DB.Profile;
};

export const AvatarPicker = (props: AvatarPickerProps) => {
    const { value, onChange, profile } = props;
    const trpc = useTRPC();
    const imageQuery = useQuery(
        trpc.z.image.findUnique.queryOptions(value ? { where: { id: value ?? '' } } : skipToken)
    );
    const image = imageQuery.data;

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const imageUpload = useImageUpload({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.1,
        selectionLimit: 1,
        base64: true,
        allowsMultipleSelection: false,
    });

    const defaultAvatar = profile ? getUserDefaultAvatarUrl(profile) : undefined;

    return (
        <>
            <View style={{ position: 'relative', width: 128, height: 128 }}>
                <Image
                    image={image}
                    source={!value ? { uri: defaultAvatar } : null}
                    w={128}
                    h={128}
                    br="full"
                    bg="background.elevation1"
                />

                <LoadingOverlay visible={imageUpload.isUploading} />
                <Stack absoluteFill justifyEnd alignEnd>
                    <Button
                        color="secondary"
                        variant="contained"
                        size="sm"
                        onPress={() => setMenuOpen(true)}
                    >
                        Edit
                    </Button>
                </Stack>
                {!value && !defaultAvatar && (
                    <Stack absoluteFill center style={{ pointerEvents: 'none' }}>
                        <Icon name="User" size={36} />
                    </Stack>
                )}
            </View>
            <ImageUploadMenu
                isOpen={isMenuOpen}
                onClose={() => setMenuOpen(false)}
                canRemove={!!value}
                onSelect={(option) => {
                    switch (option) {
                        case 'library': {
                            return imageUpload.uploadFromLibrary().then(({ uploaded }) => {
                                return onChange(uploaded[0].id);
                            });
                        }
                        case 'camera': {
                            return imageUpload.uploadFromCamera().then(({ uploaded }) => {
                                return onChange(uploaded[0].id);
                            });
                        }
                        case 'remove': {
                            return onChange(null);
                        }
                    }
                }}
            />
        </>
    );
};

const LoadingOverlay = (props: { visible: boolean }) => {
    const { visible } = props;
    if (!visible) return null;

    return (
        <Stack
            center
            absoluteFill
            br="full"
            style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <ActivityIndicator size="small" />
        </Stack>
    );
};
