import { useState } from 'react';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';

export type DeleteConfirmationProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading?: boolean;
    title?: string;
    description?: string;
    confirmPhrase?: string;
    confirmCta?: string;
};

export const DeleteConfirmation = (props: DeleteConfirmationProps) => {
    const {
        title = 'Are you sure?',
        description = 'This action cannot be undone.',
        confirmPhrase,
        confirmCta = 'Confirm',
        isOpen,
        onClose,
        onConfirm,
        loading,
    } = props;
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <BottomSheetView>
                <Stack column p="xl" pb="3xl">
                    <Typography variant="h3" align="center">
                        {title}
                    </Typography>
                    <Typography variant="body1" align="center" mt="2xl">
                        {description}
                    </Typography>
                    {confirmPhrase && (
                        <>
                            <Typography variant="body1" align="center" mt="2xl" mb="xl">
                                Please type{' '}
                                <Typography variant="h6" color="accent.primary">
                                    {confirmPhrase.toUpperCase()}
                                </Typography>{' '}
                                to confirm
                            </Typography>
                            <TextField
                                placeholder="Type here to confirm"
                                value={inputValue}
                                onChange={setInputValue}
                                backgroundColor="background.tertiary"
                                TextInputProps={{
                                    textAlign: 'center',
                                    autoCapitalize: 'characters',
                                }}
                                bottomSheet
                            />
                        </>
                    )}

                    <Button
                        color="error"
                        variant="contained"
                        mt="xl"
                        disabled={!!confirmPhrase && inputValue !== confirmPhrase.toUpperCase()}
                        onPress={onConfirm}
                        loading={loading}
                    >
                        {confirmCta}
                    </Button>
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
};
