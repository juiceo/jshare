import { z } from 'zod';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const imagesRouter = router({
    create: authProcedure
        .input(
            z.object({
                path: z.string(),
                bucket: z.string(),
            })
        )
        .mutation(async (opts) => {
            const { path, bucket } = opts.input;

            /**
             * TODO: Fetch image from storage, and check it exists
             * TODO: Create blurhash from image
             */

            const image = await prisma.image.create({
                data: {
                    path,
                    bucket,
                    uploadedById: opts.ctx.userId,
                },
            });

            return image;
        }),
});
