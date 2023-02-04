import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';


export const listByGroupId = trpc.authenticatedProcedure.input(z.object({
    groupId: z.string(),
})).query(async ({ input, ctx }) => {
    const { groupId } = input;
    const group = await prisma.group.findUnique({
        where: {
            id: groupId,
        },
        select: {
            ownerId: true,
            members: true,
        },
    });
    if (!group || (group.ownerId !== ctx.user.id && !group.members.some((mem) => mem.id === ctx.user.id))) {
        throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Group not found',
        });
    }

    const expenses = await prisma.expense.findMany({
        where: {
            groupId,
        },
        include: {
            shares: true,
            sender: true,
        },
    });
    return expenses;
}),