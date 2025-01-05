import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { getDefaultShare, getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/types';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { IconButton } from '~/components/IconButton';
import { MoneyInput } from '~/components/MoneyInput';
import { Typography } from '~/components/Typography';

export type ExpenseShareEditorSheetProps = {
    onClose: () => void;
    user: DB.Profile;
    share: DB.ExpenseShare | undefined;
    onShareChange: (share: DB.ExpenseShare) => void;
};

export const ExpenseShareEditorSheet = (props: ExpenseShareEditorSheetProps) => {
    const { onClose, user, share, onShareChange } = props;
    const insets = useSafeAreaInsets();

    const handleAmountChange = (value: number) => {
        onShareChange({
            ...(share ?? getDefaultShare(user.userId)),
            amount: value,
            locked: true,
        });
    };

    const handleMultiply = (multiplier: number) => {
        if (!share) return;
        const newAmount = Math.round(share.amount * multiplier);
        onShareChange({
            ...share,
            amount: newAmount,
            locked: true,
        });
    };

    const handleReset = () => {
        onShareChange({
            ...(share ?? getDefaultShare(user.userId)),
            locked: false,
        });
    };

    return (
        <BottomSheet isOpen={true} onClose={onClose}>
            <BottomSheetView style={{ paddingBottom: insets.bottom }}>
                <Stack column>
                    <Stack row alignCenter justifyBetween p="xl">
                        <Stack center row spacing="md">
                            <Avatar userId={user.userId} />
                            <Typography variant="body1" color="primary">
                                {getUserShortName(user)}
                            </Typography>
                        </Stack>
                        <Stack center row spacing="md">
                            {share?.locked && (
                                <IconButton
                                    icon="RotateCcw"
                                    variant="ghost"
                                    onPress={handleReset}
                                    text="Reset"
                                    textPos="left"
                                />
                            )}
                        </Stack>
                    </Stack>
                    <Stack center py="3xl" px="xl" mb="2xl">
                        <MoneyInput
                            value={share?.amount ?? 0}
                            onChange={handleAmountChange}
                            currency={'USD'}
                            bottomSheet
                        />
                        <Stack row pt="2xl" spacing="xl">
                            <Button
                                size="sm"
                                color="secondary"
                                variant="contained"
                                onPress={() => handleMultiply(0.5)}
                            >
                                0.5x
                            </Button>
                            <Button
                                size="sm"
                                color="secondary"
                                variant="contained"
                                onPress={() => handleMultiply(0.9)}
                            >
                                -10%
                            </Button>
                            <Button
                                size="sm"
                                color="secondary"
                                variant="contained"
                                onPress={() => handleMultiply(1.1)}
                            >
                                +10%
                            </Button>
                            <Button
                                size="sm"
                                color="secondary"
                                variant="contained"
                                onPress={() => handleMultiply(2)}
                            >
                                2x
                            </Button>
                        </Stack>
                    </Stack>
                    <Stack p="xl">
                        <Button color="secondary" variant="contained" onPress={onClose}>
                            Done
                        </Button>
                    </Stack>
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
};
