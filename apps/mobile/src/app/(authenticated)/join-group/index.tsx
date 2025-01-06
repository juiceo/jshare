import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { ModalHeader } from '~/components/ModalHeader/ModalHeader';
import { Screen } from '~/components/Screen';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/join-group',
    },
    ({ router }) => {
        return (
            <Screen disableTopInset>
                <Screen.Content>
                    <ModalHeader title="Join group" />
                    <Stack column spacing="md" justifyEnd flex={1}>
                        <TextField
                            label="Invite code"
                            TextInputProps={{
                                placeholder: 'Enter your invite code',
                            }}
                            value={''}
                            onChange={function (value: string): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            onPress={() => {
                                router.replace('/profile');
                            }}
                        >
                            Join group
                        </Button>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
