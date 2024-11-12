import { BorderlessButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import { Icon } from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type ImageUploadMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (value: 'library' | 'camera' | 'remove') => void;
    canRemove?: boolean;
};

export const ImageUploadMenu = (props: ImageUploadMenuProps) => {
    const { isOpen, onClose, canRemove, onSelect } = props;
    const insets = useSafeAreaInsets();

    const handleSelect = (value: 'library' | 'camera' | 'remove') => {
        onSelect(value);
        onClose();
    };

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <BottomSheetView>
                <Stack column style={{ paddingBottom: insets.bottom }}>
                    <Stack row p="xl">
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
                                    <Typography variant="button" color="error.light">
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
