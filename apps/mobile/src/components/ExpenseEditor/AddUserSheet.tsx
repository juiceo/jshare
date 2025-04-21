import { Controller, useForm } from 'react-hook-form';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';
import { z } from 'zod';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { trpc } from '~/lib/trpc';

export type AddUserSheetProps = {
    onClose: () => void;
    groupId: string;
};

const schema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
});

type Schema = z.infer<typeof schema>;

export const AddUserSheet = (props: AddUserSheetProps) => {
    const { onClose, groupId } = props;

    const queryClient = useQueryClient();

    const createTemporaryParticipant = useMutation(
        trpc.groupParticipants.createTemporaryParticipant.mutationOptions()
    );

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
    });

    const handleSubmit = async (data: Schema) => {
        await createTemporaryParticipant.mutateAsync({
            groupId,
            ...data,
        });
        queryClient.invalidateQueries({
            queryKey: [getQueryKey(trpc.groupParticipants as any), getQueryKey(trpc.groups as any)],
        });
        props.onClose();
    };

    return (
        <BottomSheet isOpen={true} onClose={onClose}>
            <BottomSheetView>
                <Stack column p="xl" pb="3xl">
                    <Typography variant="h3" align="center" mb="xl">
                        Add person
                    </Typography>
                    <Typography variant="caption" align="center" mb="2xl">
                        Add someone who is not in the group yet - they'll be able to claim any
                        expenses assigned to them when they join!
                    </Typography>
                    <Controller
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <TextField
                                label="First name"
                                placeholder="John"
                                value={field.value}
                                onChange={field.onChange}
                                backgroundColor="background.main"
                                bottomSheet
                                mb="md"
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <TextField
                                label="Last name"
                                placeholder="Doe"
                                value={field.value}
                                onChange={field.onChange}
                                backgroundColor="background.main"
                                bottomSheet
                                mb="xl"
                            />
                        )}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={form.handleSubmit(handleSubmit)}
                        loading={createTemporaryParticipant.isPending}
                    >
                        Confirm
                    </Button>
                </Stack>
            </BottomSheetView>
        </BottomSheet>
    );
};
