import { plural } from '@jshare/common';

export const getGroupSubheader = (participantCount: number, onlineCount: number) => {
    if (participantCount === 1) {
        return '1 member';
    }

    const participantCountText = plural({
        plural: 'members',
        singular: 'member',
        count: participantCount,
    });
    const onlineCountText = onlineCount <= 0 ? null : `${onlineCount} online`;

    return [participantCountText, onlineCountText].filter(Boolean).join(', ');
};
