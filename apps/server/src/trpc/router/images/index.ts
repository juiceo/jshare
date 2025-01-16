import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { downloadImage, generateBlurhash } from '../../../services/blurhash';
import { db } from '../../../services/db';
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

            const imageThumbnail = await downloadImage({ path, bucket });
            if (!imageThumbnail) {
                throw new TRPCError({ code: 'NOT_FOUND', message: 'Image not found' });
            }
            const blurhash = await generateBlurhash(imageThumbnail);

            const image = await db.image.create({
                data: {
                    path,
                    bucket,
                    uploadedById: opts.ctx.userId,
                    blurhash,
                },
            });

            return image;
        }),
});
