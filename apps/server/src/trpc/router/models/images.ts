import { TRPCError } from '@trpc/server';

import { zDB } from '@jshare/db';

import { downloadImage, generateBlurhash } from '../../../services/blurhash';
import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zFindByIdArgs } from './_util';

export const imagesRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.image.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
        });
    }),
    create: authProcedure
        .input(
            zCreateArgs(zDB.models.ImageCreateSchema).omit({
                blurhash: true,
                uploadedById: true,
            })
        )
        .mutation(async (opts) => {
            const { path, bucket } = opts.input;

            const imageThumbnail = await downloadImage({ path, bucket });
            if (!imageThumbnail) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Image with path "${path}" not found in bucket "${bucket}"`,
                });
            }
            const blurhash = await generateBlurhash(imageThumbnail);

            return db.image.create({
                data: {
                    ...opts.input,
                    path,
                    bucket,
                    uploadedById: opts.ctx.userId,
                    blurhash,
                },
            });
        }),
});
