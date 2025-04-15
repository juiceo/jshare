import { z } from 'zod';

import { sleep } from '@jshare/common';
import { zDB } from '@jshare/db';

import { getDbForUserId } from '../../../services/db';
import { authProcedure, router } from '../../trpc';

export const zFindByIdInput = z.object({
    id: z.string(),
});

export const zFindManyInput = zDB.models.ProfileScalarSchema.partial();
export const zFindOneInput = zDB.models.ProfileScalarSchema.partial();

export const profilesRouter = router({
    findById: authProcedure.input(zFindByIdInput).query(async (opts) => {
        const db = await getDbForUserId(opts.ctx.userId);

        return db.profile.findUnique({
            where: {
                id: opts.input.id,
            },
            include: {
                avatar: true,
            },
        });
    }),
    findMany: authProcedure.input(zFindManyInput).query(async (opts) => {
        const db = await getDbForUserId(opts.ctx.userId);
        await sleep(5000);

        return db.profile.findMany({
            where: opts.input,
            include: {
                avatar: true,
            },
        });
    }),
    findOne: authProcedure.input(zFindOneInput).query(async (opts) => {
        const db = await getDbForUserId(opts.ctx.userId);

        return db.profile.findFirst({
            where: opts.input,
            include: {
                avatar: true,
            },
        });
    }),
});
