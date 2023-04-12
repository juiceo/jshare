import shortId from 'shortid';
import { z } from 'zod';

import { zCurrencyCode } from '@/modules/money';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const createGroupInput = z.object({
	name: z.string().min(1, 'Please enter a name'),
	currency: zCurrencyCode,
});

export const createGroup = trpc.authenticatedProcedure.input(createGroupInput).mutation(async ({ input, ctx }) => {
	return await prisma.group.create({
		data: {
			...input,
			ownerId: ctx.user.id,
			inviteId: shortId.generate(),
		},
	});
});
