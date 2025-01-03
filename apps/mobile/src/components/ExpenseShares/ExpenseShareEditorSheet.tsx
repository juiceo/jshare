import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/types';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import type { ExpenseShare } from '~/components/ExpenseShares/types';
import { IconButton } from '~/components/IconButton';
import { MoneyInput } from '~/components/MoneyInput';
import { Typography } from '~/components/Typography';

export type ExpenseShareEditorSheetProps = {
    onClose: () => void;
    user: DB.Profile;
    amount: number;
    share: ExpenseShare;
    onShareChange: (share: ExpenseShare) => void;
};

export const ExpenseShareEditorSheet = (props: ExpenseShareEditorSheetProps) => {
    const { onClose, user, amount, share, onShareChange } = props;
    const insets = useSafeAreaInsets();

    const handleAmountChange = (value: number) => {
        if (value === 0) {
            onShareChange({
                fixedAmount: null,
                enabled: false,
            });
        } else {
            onShareChange({
                fixedAmount: value,
                enabled: true,
            });
        }
    };

    const handleMultiply = (multiplier: number) => {
        const newAmount = Math.round(amount * multiplier);
        onShareChange({
            fixedAmount: newAmount,
            enabled: true,
        });
    };

    const handleReset = () => {
        onShareChange({
            fixedAmount: null,
            enabled: true,
        });
    };

    const isDefaultShare = share.fixedAmount === null && share.enabled;

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
                            {!isDefaultShare && (
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
                            value={amount}
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
