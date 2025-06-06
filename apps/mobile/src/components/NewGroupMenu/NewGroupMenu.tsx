import { BorderlessButton } from 'react-native-gesture-handler';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type NewGroupMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (value: 'create' | 'join') => void;
};

export const NewGroupMenu = (props: NewGroupMenuProps) => {
    const { isOpen, onClose, onSelect } = props;

    const handleSelect = (value: 'create' | 'join') => {
        onSelect(value);
        onClose();
    };

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <BottomSheetView>
                <Stack column p="xl" pb="3xl">
                    <Stack row>
                        <BorderlessButton
                            style={{ flex: 1 }}
                            onPress={() => handleSelect('create')}
                        >
                            <Stack center column p="xl" spacing="xl">
                                <Icon name="Plus" size={36} color="text.primary" />
                                <Typography variant="button">Create a group</Typography>
                            </Stack>
                        </BorderlessButton>
                        <Divider vertical />
                        <BorderlessButton style={{ flex: 1 }} onPress={() => handleSelect('join')}>
                            <Stack center column p="xl" spacing="xl">
                                <Icon name="KeyRound" size={36} color="text.primary" />
                                <Typography variant="button" align="center">
                                    Join with code
                                </Typography>
                            </Stack>
                        </BorderlessButton>
                    </Stack>
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
};
