import { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';

export const OFFLINE_INDICATOR_HEIGHT = 32;

export type OfflineInfoProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
};

export const InfoSheet = (props: OfflineInfoProps) => {
    const insets = useSafeAreaInsets();

    useEffect(() => {
        if (props.isOpen) {
            Keyboard.dismiss();
        }
    }, [props.isOpen]);

    return (
        <BottomSheet isOpen={props.isOpen} onClose={props.onClose}>
            <BottomSheetView style={{ paddingBottom: insets.bottom }}>
                <Stack column center p="xl" pb="3xl">
                    <Typography variant="h3" mb="xl">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" align="center" color="secondary">
                        {props.description}
                    </Typography>
                </Stack>
                <Button m="xl" onPress={props.onClose}>
                    OK
                </Button>
            </BottomSheetView>
        </BottomSheet>
    );
};
