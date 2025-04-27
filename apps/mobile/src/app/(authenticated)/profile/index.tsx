import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { useDb } from '~/lib/collections/hooks';
import { Profiles } from '~/lib/collections/profiles.collection';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(() => {
    const user = useCurrentUser();
    const profile = useDb(() => Profiles.findById(user.id), [user.id]);

    return (
        <Screen>
            <Screen.Header title="Profile" />
            <Screen.Content scrollable disableTopInset>
                <Stack p="xl" spacing="md">
                    <TextField
                        label={'First name'}
                        value={profile.data?.firstName ?? ''}
                        onChange={(value) => profile?.update({ firstName: value })}
                        TextInputProps={{
                            placeholder: 'John',
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={profile.data?.lastName ?? ''}
                        onChange={(value) => profile?.update({ lastName: value })}
                        TextInputProps={{
                            placeholder: 'Doe',
                        }}
                    />
                    <Select
                        label="Preferred currency"
                        placeholder="Select currency"
                        options={CURRENCY_OPTIONS}
                        value={profile.data?.currency ?? 'USD'}
                        onChange={(value) => profile?.update({ currency: value })}
                        MenuProps={{
                            title: 'Select currency',
                        }}
                    />
                </Stack>
            </Screen.Content>
        </Screen>
    );
});
