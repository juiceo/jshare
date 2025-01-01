export const getGroupBroadcastChannel = (groupId: string) => {
    return `group_${groupId}`;
};

export enum GroupBroadcastEvent {
    Message = 'message',
}

export type GroupBroadcastPayload = {
    type: GroupBroadcastEvent.Message;
};
