import { Group, User } from '@prisma/client';
import { uniqBy } from 'lodash';

export const isUserInGroup = (
	userId: string,
	group: { members: User[]; owner: User },
) => {
	return (
		group.owner.id === userId ||
		group.members?.some((member) => member.id === userId)
	);
};

export const getAllGroupMembers = (
	group: Group & { members: User[]; owner: User },
) => {
	return uniqBy([group.owner, ...group.members], 'id');
};

export const getGroupMemberCount = (group: Group & { members: User[] }) => {
	return group.members.length + 1;
};
