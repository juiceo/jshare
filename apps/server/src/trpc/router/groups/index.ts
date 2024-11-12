import { z } from 'zod';

import { Currency, Role } from '@jshare/prisma';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const groupsRouter = router({
    create: authProcedure
        .input(
            z.object({
                name: z.string(),
                currency: z.nativeEnum(Currency),
                imageId: z.string().optional(),
            })
        )
        .mutation(async (opts) => {
            const group = await prisma.group.create({
                data: {
                    name: opts.input.name,
                    currency: opts.input.currency,
                    imageId: opts.input.imageId,
                    participants: {
                        create: {
                            userId: opts.ctx.userId,
                            role: Role.Owner,
                        },
                    },
                },
            });

            return group;
        }),
    listParticipating: authProcedure.query(async (opts) => {
        const groups = await prisma.group.findMany({
            where: {
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
        });

        return groups;
    }),
});
