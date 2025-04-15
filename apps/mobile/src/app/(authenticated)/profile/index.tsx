import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

export default screen({ auth: true }, ({ auth }) => {
    const [profile] = trpc.profiles.get.useSuspenseQuery({ id: auth.userId });

    return (
        <Screen>
            <Screen.Header title="Profile" />
            <Screen.Content scrollable disableTopInset>
                <Stack p="xl" spacing="md">
                    <TextField
                        label={'First name'}
                        value={profile.firstName ?? ''}
                        onChange={(value) => {
                            /**
                             * TODO: Update profile
                             */
                        }}
                        TextInputProps={{
                            placeholder: 'John',
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={profile.lastName ?? ''}
                        onChange={(value) => {
                            /**
                             * TODO: Update profile
                             */
                        }}
                        TextInputProps={{
                            placeholder: 'Doe',
                        }}
                    />
                    <Select
                        label="Preferred currency"
                        placeholder="Select currency"
                        options={CURRENCY_OPTIONS}
                        value={profile.currency}
                        onChange={(value) => {
                            /**
                             * TODO: Update profile
                             */
                        }}
                        MenuProps={{
                            title: 'Select currency',
                        }}
                    />
                </Stack>
            </Screen.Content>
        </Screen>
    );
});
