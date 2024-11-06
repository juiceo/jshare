import { Pressable } from 'react-native';
import { Image } from 'expo-image';

import { useTheme } from '@jshare/theme';

import Icon from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { trpc } from '~/services/trpc';

export type ProfileBadgeProps = {
    onPress: () => void;
};

export const ProfileBadge = (props: ProfileBadgeProps) => {
    const { theme } = useTheme();
    const profile = trpc.profiles.get.useQuery();

    const getName = () => {
        if (!profile.data) return '';
        return [profile.data.firstName, profile.data.lastName?.slice(0, 1).concat('.')]
            .filter(Boolean)
            .join(' ');
    };
    return (
        <Pressable onPress={props.onPress}>
            <Stack row bg="background.elevation1" br="lg">
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        opacity: 0.8,
                        borderWidth: 1,
                        borderColor: theme.palette.accent.main,
                        borderRadius: theme.borderRadius.lg,
                    }}
                    source={profile.data?.avatar ? { uri: profile.data.avatar } : null}
                />
                <Stack row center pl="lg" pr="md" spacing="md">
                    <Typography variant="h4">{getName()}</Typography>
                    <Icon name="ChevronRight" size={16} />
                </Stack>
            </Stack>
        </Pressable>
    );
};
