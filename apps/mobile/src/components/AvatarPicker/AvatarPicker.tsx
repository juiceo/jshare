import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import Icon from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { ImageUploadMenu } from '~/components/ImageUploadMenu/ImageUploadMenu';
import { MediaTypeOptions, useImageUpload } from '~/hooks/useImageUpload';

export type AvatarPickerProps = {
    value: string | null | undefined;
    onChange: (value: string | null) => void;
};

export const AvatarPicker = (props: AvatarPickerProps) => {
    const { value, onChange } = props;
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

    return (
        <>
            <View style={{ position: 'relative' }}>
                <Avatar imageId={value} size={'lg'} />
                <LoadingOverlay visible={imageUpload.isUploading} />
                <Stack absoluteFill justifyEnd alignEnd>
                    <Button
                        color="paper"
                        variant="contained"
                        size="sm"
                        onPress={() => setMenuOpen(true)}
                    >
                        Edit
                    </Button>
                </Stack>
                {!value && (
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
