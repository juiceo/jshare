import { Pressable, type ViewStyle } from 'react-native';

import Icon from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type ImageUploaderProps = {
    value: string | null | undefined;
    onChange: (value: string | null) => void;
    aspectRatio?: ViewStyle['aspectRatio'];
};

export const ImageUploader = (props: ImageUploaderProps) => {
    const { value, onChange, aspectRatio = '16/9' } = props;
    return (
        <Pressable>
            <Stack bg="background.elevation1" br="md" style={{ width: '100%', aspectRatio }}>
                <EmptyPlaceholder />
            </Stack>
        </Pressable>
    );
};

const EmptyPlaceholder = () => {
    return (
        <Stack center spacing="md" h="100%" w="100%">
            <Icon name="ImagePlus" />
            <Typography variant="body1">Upload an image</Typography>
        </Stack>
    );
};
