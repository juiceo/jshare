import { Pressable } from 'react-native';

import type { Profile } from '@jshare/prisma';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useFormField } from '~/hooks/useFormField';
import { generateIdenticon } from '~/services/identicons';
import { trpc } from '~/services/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export default function ProfilePage() {
    const profileQuery = trpc.profiles.get.useQuery();
    if (!profileQuery.isFetched) return null;

    return <ProfilePageInner profile={profileQuery.data ?? null} />;
}

const ProfilePageInner = (props: { profile: Profile | null }) => {
    const { profile } = props;
    const { signOut } = useSession();
    const updateProfile = trpc.profiles.update.useMutation();
    const trpcUtils = trpc.useUtils();

    const avatar = useFormField<string | undefined>(profile?.avatar ?? undefined);
    const firstName = useFormField<string>(profile?.firstName ?? '', (value) => {
        if (!value) return 'First name is required';
        return { value };
    });
    const lastName = useFormField<string>(profile?.lastName ?? '');

    return (
        <Screen screenOptions={{ title: 'Profile' }}>
            <Screen.Content scrollable>
                <Stack flex={1} spacing="md">
                    <Stack column center p="xl" br="md" spacing="none">
                        <Typography variant="body2">
                            {profile?.firstName} {profile?.lastName}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            Joined Oct 24, 2024
                        </Typography>
                        <Pressable
                            onPress={() => {
                                const identicon = generateIdenticon(`${Math.random()}`);
                                avatar.setValue(identicon);
                                updateProfile.mutate(
                                    {
                                        avatar: identicon,
                                    },
                                    {
                                        onSuccess: (data) => {
                                            trpcUtils.profiles.get.setData(undefined, () => data);
                                        },
                                    }
                                );
                            }}
                        >
                            <Avatar size="lg" source={avatar.value} mt="xl" />
                        </Pressable>
                    </Stack>
                    <TextField
                        label={'First name'}
                        value={firstName.value}
                        onChange={firstName.setValue}
                        error={firstName.error}
                        TextInputProps={{
                            placeholder: 'John',
                            onBlur: () => {
                                const validation = firstName.validate();
                                if (validation.ok) {
                                    updateProfile.mutate(
                                        {
                                            firstName: firstName.value,
                                        },
                                        {
                                            onSuccess: (data) => {
                                                trpcUtils.profiles.get.setData(
                                                    undefined,
                                                    () => data
                                                );
                                            },
                                        }
                                    );
                                }
                            },
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={lastName.value}
                        onChange={lastName.setValue}
                        TextInputProps={{
                            placeholder: 'Doe',
                            onBlur: () => {
                                updateProfile.mutate(
                                    {
                                        lastName: lastName.value,
                                    },
                                    {
                                        onSuccess: (data) => {
                                            trpcUtils.profiles.get.setData(undefined, () => data);
                                        },
                                    }
                                );
                            },
                        }}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Button color="error" variant="text" onPress={signOut} mt="3xl">
                    Sign out
                </Button>
            </Screen.Footer>
        </Screen>
    );
};
