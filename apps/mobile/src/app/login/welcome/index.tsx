import { useState } from 'react';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Redirect, router } from 'expo-router';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Screen } from '~/components/Screen';
import { useIdenticon } from '~/hooks/useIdenticon';
import { trpc } from '~/services/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export default function LoginWelcomePage() {
    const { session } = useSession();
    const [identiconSeed, setIdenticonSeed] = useState<number>(0);
    const identicon = useIdenticon(session?.user.id ?? null, `${identiconSeed}`);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const createProfile = trpc.profiles.create.useMutation();

    const handleContinue = async () => {
        const email = session?.user.email;

        if (!email) {
            Alert.alert('Missing email!');
            return;
        }
        await createProfile.mutateAsync({
            firstName,
            lastName,
            email,
            avatar: identicon ?? undefined,
        });

        router.dismissAll();
        router.replace('/');
    };

    if (!session) {
        return <Redirect href={{ pathname: '/login' }} />;
    }

    return (
        <Screen
            screenOptions={{
                title: 'Complete your profile',
            }}
        >
            <Screen.Content scrollable>
                <Stack flex={1} center spacing="md">
                    <Stack column center mb="3xl" spacing="sm">
                        <RectButton
                            activeOpacity={0.5}
                            onPress={() => {
                                Alert.alert('Pressed!');
                            }}
                        >
                            <Avatar source={identicon} size="lg" />
                        </RectButton>
                        <Button
                            variant="text"
                            color="primary"
                            onPress={() => setIdenticonSeed((prev) => prev + 1)}
                        >
                            Regenerate
                        </Button>
                    </Stack>
                    <TextField
                        label={'First name'}
                        value={firstName}
                        onChange={setFirstName}
                        TextInputProps={{
                            placeholder: 'John',
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={lastName}
                        onChange={setLastName}
                        TextInputProps={{
                            placeholder: 'Doe',
                        }}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    onPress={handleContinue}
                    loading={createProfile.isPending}
                >
                    Continue
                </Button>
            </Screen.Footer>
        </Screen>
    );
}
