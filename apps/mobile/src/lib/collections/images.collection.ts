import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { DB, zDB } from '@jshare/db';

import { DocumentCollection } from '~/lib/collections/Collection';
import { trpcClient } from '~/lib/trpc';

type ImageUpdateInput = z.infer<typeof zDB.models.ImageUpdateScalarSchema>;
type ImageCreateInput = z.infer<typeof zDB.models.ImageCreateScalarSchema>;

export const Images = new DocumentCollection<DB.Image, ImageUpdateInput, ImageCreateInput>({
    name: 'images',
    api: {
        find: (queries: Partial<DB.Image>[]) => {
            return trpcClient.z.image.findMany.query({ where: { OR: queries } });
        },
        update: (id: string, data: ImageUpdateInput) => {
            return trpcClient.z.image.update.mutate({
                where: {
                    id,
                },
                data,
            }) as Promise<DB.Image>;
        },
        create: (data: ImageCreateInput) => {
            return trpcClient.z.image.create.mutate({
                data,
            }) as Promise<DB.Image>;
        },
    },
    defaults: () => ({
        id: uuidv4(),
        archived: false,
        archivedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        path: '',
        bucket: '',
        uploadedById: '',
        blurhash: null,
    }),
});
