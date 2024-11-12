import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { Redirect, useRouter } from 'expo-router';
import { z } from 'zod';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { trpc } from '~/services/trpc';
import { useSession } from '~/wrappers/SessionProvider';

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string(),
    avatar: z.string(),
});

type Schema = z.infer<typeof schema>;

export default function LoginWelcomePage() {
    const { session } = useSession();
    const router = useRouter();

    const form = useForm<Schema>({
        defaultValues: {
            firstName: '',
            lastName: '',
            avatar: '',
        },
        resolver: zodResolver(schema),
    });

    const createProfile = trpc.profiles.create.useMutation();

    const handleSubmit = async (data: Schema) => {
        const email = session?.user.email;
        if (!email) {
            Alert.alert('Missing email!');
            return;
        }
        await createProfile.mutateAsync({
            firstName: data.firstName,
            lastName: data.lastName,
            avatar: data.avatar,
            email,
        });
        router.dismissAll();
        router.replace('/');
    };

    if (!session) {
        return <Redirect href={{ pathname: '/login' }} />;
    }

    return (
        <Screen>
            <Screen.Content scrollable>
                <Header title="Complete your profile" />
                <Stack p="xl" flex={1} center spacing="md">
                    <Stack py="3xl">
                        <Controller
                            control={form.control}
                            name="avatar"
                            render={({ field }) => (
                                <AvatarPicker value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </Stack>
                    <Controller
                        control={form.control}
                        name="firstName"
                        render={({ field, fieldState }) => (
                            <TextField
                                label={'First name'}
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                                placeholder="John"
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="lastName"
                        render={({ field, fieldState }) => (
                            <TextField
                                label={'Last name'}
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                                placeholder="Doe"
                            />
                        )}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer padding="xl">
                <Button
                    variant={'contained'}
                    color={'primary'}
                    onPress={form.handleSubmit(handleSubmit)}
                    loading={createProfile.isPending}
                >
                    Continue
                </Button>
            </Screen.Footer>
        </Screen>
    );
}
