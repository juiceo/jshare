import { Pressable } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { useTheme } from '@jshare/theme';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';
import { useTRPC } from '~/lib/trpc';

export type ProfileBadgeProps = {
    onPress: () => void;
};

export const ProfileBadge = (props: ProfileBadgeProps) => {
    const { theme } = useTheme();
    const trpc = useTRPC();
    const profile = useQuery(trpc.profiles.me.queryOptions()).data;

    const getName = () => {
        if (!profile) return '';
        return [profile.firstName, profile.lastName?.slice(0, 1).concat('.')]
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
                    image={profile?.avatar}
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
