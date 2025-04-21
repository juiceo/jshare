import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { useDb } from '~/lib/collections/hooks';
import { Profiles } from '~/lib/collections/profiles.collection';
import { screen } from '~/wrappers/screen';

export default screen({ auth: true }, ({ auth }) => {
    const profile = useDb(() => Profiles.findById(auth.userId), [auth.userId]);

    return (
        <Screen>
            <Screen.Header title="Profile" />
            <Screen.Content scrollable disableTopInset>
                <Stack p="xl" spacing="md">
                    <TextField
                        label={'First name'}
                        value={profile?.data.firstName ?? ''}
                        onChange={(value) => Profiles.update(auth.userId, { firstName: value })}
                        TextInputProps={{
                            placeholder: 'John',
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={profile?.data.lastName ?? ''}
                        onChange={(value) => Profiles.update(auth.userId, { lastName: value })}
                        TextInputProps={{
                            placeholder: 'Doe',
                        }}
                    />
                    <Select
                        label="Preferred currency"
                        placeholder="Select currency"
                        options={CURRENCY_OPTIONS}
                        value={profile?.data.currency ?? 'USD'}
                        onChange={(value) => Profiles.update(auth.userId, { currency: value })}
                        MenuProps={{
                            title: 'Select currency',
                        }}
                    />
                </Stack>
            </Screen.Content>
        </Screen>
    );
});
