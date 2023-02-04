import { archiveGroup } from '@/server/routers/groups/archive';
import { createGroup } from '@/server/routers/groups/create';
import { deleteGroup } from '@/server/routers/groups/delete';
import { generateInviteId } from '@/server/routers/groups/generateInviteId';
import { getById, getByInviteId } from '@/server/routers/groups/get';
import { joinGroupWithInviteId } from '@/server/routers/groups/join';
import { listOwnGroups } from '@/server/routers/groups/list';
import * as trpc from '@/server/trpc';

export const groupRouter = trpc.router({
	create: createGroup,
	delete: deleteGroup,
	archive: archiveGroup,
	joinGroupWithInviteId,
	generateInviteId,
	getByInviteId,
	getById,
	listOwnGroups,
});
