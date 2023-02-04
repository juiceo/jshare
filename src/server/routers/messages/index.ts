import { createMessage } from '@/server/routers/messages/create';
import { listByGroupId, listByGroupIdInfinite } from '@/server/routers/messages/list';
import * as trpc from '@/server/trpc';

import { onCreateMessageInGroup } from './create';

export const messageRouter = trpc.router({
	create: createMessage,
	onCreateMessageInGroup,
	listByGroupId,
	listByGroupIdInfinite,
});
