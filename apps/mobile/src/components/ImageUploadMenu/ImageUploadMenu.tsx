import { BorderlessButton } from 'react-native-gesture-handler';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ImageUploadMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (value: 'library' | 'camera' | 'remove') => void;
    canRemove?: boolean;
};

export const ImageUploadMenu = (props: ImageUploadMenuProps) => {
    const { isOpen, onClose, canRemove, onSelect } = props;

    const handleSelect = (value: 'library' | 'camera' | 'remove') => {
        onSelect(value);
        onClose();
    };

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <BottomSheetView>
                <Stack column>
                    <Stack row p="xl" pb="3xl">
                        <BorderlessButton
                            style={{ flex: 1 }}
                            onPress={() => handleSelect('camera')}
                        >
                            <Stack center column p="xl" spacing="xl">
                                <Icon name="Camera" size={36} />
                                <Typography variant="button">Take a photo</Typography>
                            </Stack>
                        </BorderlessButton>
                        <Divider vertical />
                        <BorderlessButton
                            style={{ flex: 1 }}
                            onPress={() => handleSelect('library')}
                        >
                            <Stack center column p="xl" spacing="xl">
                                <Icon name="Images" size={36} />
                                <Typography variant="button" align="center">
                                    From library
                                </Typography>
                            </Stack>
                        </BorderlessButton>
                    </Stack>
                    {canRemove && (
                        <>
                            <Divider horizontal />
                            <BorderlessButton onPress={() => handleSelect('remove')}>
                                <Stack row center p="2xl">
                                    <Typography variant="button" color="error">
                                        Remove image
                                    </Typography>
                                </Stack>
                            </BorderlessButton>
                        </>
                    )}
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
};
