import { Keyboard, Pressable } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { getDefaultShare, type PartialExpenseShare } from '@jshare/common';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { IconButton } from '~/components/IconButton';
import { MoneyInput } from '~/components/MoneyInput';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';

export type ExpenseShareEditorSheetProps = {
    onClose: () => void;
    userId: string;
    share: PartialExpenseShare | undefined;
    onShareChange: (share: PartialExpenseShare) => void;
};

export const ExpenseShareEditorSheet = (props: ExpenseShareEditorSheetProps) => {
    const { onClose, userId, share, onShareChange } = props;

    const handleAmountChange = (value: number) => {
        onShareChange({
            ...(share ?? getDefaultShare(userId)),
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
            ...(share ?? getDefaultShare(userId)),
            locked: false,
        });
    };

    return (
        <BottomSheet isOpen={true} onClose={onClose}>
            <BottomSheetView>
                <Stack column p="xl" pb="3xl" pt="none">
                    <Stack row alignCenter justifyBetween>
                        <Stack center row spacing="md">
                            <Avatar userId={userId} />
                            <Typography variant="body1" color="primary">
                                <UserName userId={userId} variant="short" />
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
                            bottomSheet
                        />
                        <Pressable onTouchStart={() => Keyboard.dismiss()}>
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
                        </Pressable>
                    </Stack>
                    <Button color="secondary" variant="contained" onPress={onClose}>
                        Done
                    </Button>
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
};
