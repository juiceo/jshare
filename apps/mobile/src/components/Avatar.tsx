import { observer } from 'mobx-react-lite';

import { getUserDefaultAvatarUrl } from '@jshare/common';
import type { BorderRadiusUnit } from '@jshare/theme';

import { Image } from '~/components/atoms/Image';
import { Store } from '~/lib/store/collections';

export type AvatarProps = {
    userId?: string;
    variant?: 'circle' | 'rounded' | 'square';
    size?: 'sm' | 'md' | 'lg';
};

export const Avatar = observer((props: AvatarProps) => {
    const { userId } = props;

    const profile = Store.profiles.findById(userId);

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
            image={profile?.data.avatar}
            source={{ uri: profile ? getUserDefaultAvatarUrl(profile.data) : undefined }}
            width={dimensions}
            height={dimensions}
            br={borderRadius}
            style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
            }}
        />
    );
});
