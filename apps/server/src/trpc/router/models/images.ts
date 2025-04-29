import { TRPCError } from '@trpc/server';
import { isEmpty } from 'lodash';
import { z } from 'zod';

import { zDB } from '@jshare/db';

import { downloadImage, generateBlurhash } from '../../../services/blurhash';
import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zID } from './_util';

export const zImagesQuery = z
    .object({
        id: z.string(),
    })
    .partial()
    .refine((value) => !isEmpty(value));

export const zImagesCreate = zDB.models.ImageCreateScalarSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    blurhash: true,
    uploadedById: true,
}).extend({
    id: zID,
});

export const imagesRouter = router({
    findById: authProcedure.input(zID.array()).query(async (opts) => {
        return db.image.findMany({
            where: {
                id: {
                    in: opts.input,
                },
            },
        });
    }),
    findWhere: authProcedure.input(zImagesQuery).query(async (opts) => {
        return db.image.findMany({
            where: opts.input,
        });
    }),
    create: authProcedure.input(zImagesCreate).mutation(async (opts) => {
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
