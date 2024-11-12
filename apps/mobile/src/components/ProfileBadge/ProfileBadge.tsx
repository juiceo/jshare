import { Pressable } from 'react-native';

import { useTheme } from '@jshare/theme';

import { Icon } from '~/components/atoms/Icon';
import { Image } from '~/components/atoms/Image';
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
                    width={50}
                    height={50}
                    br="xl"
                    border="accent.main"
                    darken={0.2}
                    source={{
                        id: profile.data?.avatarId,
                    }}
                    fit={'fill'}
                />
                <Stack row center pl="lg" pr="md" spacing="md">
                    <Typography variant="h4">{getName()}</Typography>
                    <Icon name="ChevronRight" size={16} color={theme.palette.accent.main} />
                </Stack>
            </Stack>
        </Pressable>
    );
};
