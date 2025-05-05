import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { getUserDefaultAvatarUrl } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { ImageUploadMenu } from '~/components/ImageUploadMenu/ImageUploadMenu';
import { MediaTypeOptions, useImageUpload } from '~/hooks/useImageUpload';

export type AvatarPickerProps = {
    value: DB.Image | null;
    onChange: (value: DB.Image | null) => void;
    profile?: DB.Profile;
};

export const AvatarPicker = observer((props: AvatarPickerProps) => {
    const { value, onChange, profile } = props;

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
                    image={value}
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
                                return onChange(uploaded[0]);
                            });
                        }
                        case 'camera': {
                            return imageUpload.uploadFromCamera().then(({ uploaded }) => {
                                return onChange(uploaded[0]);
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
});

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
