export const getGroupSubheader = (participantCount: number, onlineCount: number) => {
    if (participantCount === 1) {
        return '1 member';
    }

    const participantCountText =
        participantCount === 1 ? '1 member' : `${participantCount} members`;
    const onlineCountText = onlineCount <= 0 ? null : `${onlineCount} online`;

    return [participantCountText, onlineCountText].filter(Boolean).join(', ');
};
