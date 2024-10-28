import { useState } from 'react';
import { ActivityIndicator, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Avatar } from '~/components/atoms/Avatar';
import { Stack } from '~/components/atoms/Stack';
import { supabase } from '~/services/supabase';
import { useSession } from '~/wrappers/SessionProvider';

export type AvatarPickerProps = {
    value: string | null | undefined;
    onChange: (value: string) => void;
};

export const AvatarPicker = (props: AvatarPickerProps) => {
    const { value, onChange } = props;
    const { session } = useSession();
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handlePress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.1,
            selectionLimit: 1,
            base64: true,
            allowsMultipleSelection: false,
            presentationStyle: ImagePicker.UIImagePickerPresentationStyle.POPOVER,
        });

        if (result.canceled || !result.assets[0]) {
            return;
        }
        setIsUploading(true);

        const fetchResponse = await fetch(result.assets[0].uri);
        const blob = await fetchResponse.blob();
        const arrayBuffer = await new Response(blob).arrayBuffer();
        const imageId = `${session?.user.id ?? 'anon'}_${Math.random().toString(36)}`;
        const image = await supabase.storage.from('avatars').upload(imageId, arrayBuffer, {
            contentType: result.assets[0].mimeType,
        });
        if (image.data) {
            const url = await supabase.storage.from('avatars').getPublicUrl(imageId);
            onChange(url.data.publicUrl);
        } else {
            Alert.alert('Image upload failed: ' + image.error.message, 'Please try again');
        }

        setIsUploading(false);
    };

    return (
        <Pressable onPress={handlePress} style={{ position: 'relative' }}>
            <Avatar source={value} size={'lg'} />
            <LoadingOverlay visible={isUploading} />
        </Pressable>
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
