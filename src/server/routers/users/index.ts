import { getById } from '@/server/routers/users/get';
import { updateUser } from '@/server/routers/users/update';
import * as trpc from '@/server/trpc';

export const usersRouter = trpc.router({
	getById,
	update: updateUser,
});
