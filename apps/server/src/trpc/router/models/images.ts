import { sleep } from '@trpc/server/unstable-core-do-not-import';
import { z } from 'zod';

import { getDbForUserId } from '../../../services/db';
import { authProcedure, router } from '../../trpc';

export const zFindByIdInput = z.object({
    id: z.string(),
});

export const imagesRouter = router({
    findById: authProcedure.input(zFindByIdInput).query(async (opts) => {
        const db = await getDbForUserId(opts.ctx.userId);
        await sleep(5000);

        return db.image.findUnique({
            where: {
                id: opts.input.id,
            },
        });
    }),
});
