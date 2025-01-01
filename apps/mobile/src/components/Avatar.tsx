import { getUserDefaultAvatarUrl } from '@jshare/common';
import type { BorderRadiusUnit } from '@jshare/theme';

import { Image } from '~/components/atoms/Image';
import { useProfileById } from '~/hooks/useProfileById';

export type AvatarProps = {
    userId: string;
    variant?: 'circle' | 'rounded' | 'square';
    size?: 'sm' | 'md' | 'lg';
};

export const Avatar = (props: AvatarProps) => {
    const { userId } = props;

    const { profile } = useProfileById(userId);

    const dimensions = (() => {
        switch (props.size) {
            case 'sm':
                return 24;
            case 'md':
                return 36;
            case 'lg':
                return 64;
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
