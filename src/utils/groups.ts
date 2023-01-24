import { Group, User } from '@prisma/client';
import { uniqBy } from 'lodash';

interface GroupMembers {
	members: User[];
	owner: User;
}
type GroupWithMembers = Group & GroupMembers;

export const isUserInGroup = (userId: string, group: GroupMembers) => {
	return (
		group.owner.id === userId ||
		group.members?.some((member) => member.id === userId)
	);
};

export const getAllGroupMembers = (group: GroupWithMembers) => {
	return uniqBy([group.owner, ...group.members], 'id');
};

export const getGroupMemberCount = (group: GroupWithMembers) => {
	return getAllGroupMembers(group).length;
};
