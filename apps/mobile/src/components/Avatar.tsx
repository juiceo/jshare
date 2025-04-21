import { skipToken, useQuery } from '@tanstack/react-query';

import { getUserDefaultAvatarUrl } from '@jshare/common';
import type { DB } from '@jshare/db';
import type { BorderRadiusUnit } from '@jshare/theme';

import { Image } from '~/components/atoms/Image';
import { trpc } from '~/lib/trpc';

export type AvatarProps = {
    userId?: string;
    variant?: 'circle' | 'rounded' | 'square';
    size?: 'sm' | 'md' | 'lg';
};

export const Avatar = (props: AvatarProps) => {
    const { userId } = props;

    const profile = useQuery(
        trpc.z.profile.findUnique.queryOptions(
            userId ? { where: { id: userId }, include: { avatar: true } } : skipToken
        )
    ).data as DB.Profile<{ avatar: true }> | undefined;

    const dimensions = (() => {
        switch (props.size) {
            case 'sm':
                return 24;
            case 'lg':
                return 64;
            case 'md':
            default:
                return 36;
        }
    })();

    const borderRadius = ((): BorderRadiusUnit => {
        switch (props.variant) {
            case 'rounded':
                return 'xl';
            case 'square':
                return 'none';
            case 'circle':
            default:
                return 'full';
        }
    })();

    return (
        <Image
            image={profile?.avatar}
            source={{ uri: profile ? getUserDefaultAvatarUrl(profile) : undefined }}
            width={dimensions}
            height={dimensions}
            br={borderRadius}
            style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
            }}
        />
    );
};
