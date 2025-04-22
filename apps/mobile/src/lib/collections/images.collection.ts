import { atom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';

import type { DB } from '@jshare/db';

import { DocumentCollection } from '~/lib/collections/Collection';
import { CollectionDocument } from '~/lib/collections/CollectionDocument';
import type { DbDocumentStore } from '~/lib/collections/types';
import { trpcClient } from '~/lib/trpc';

const imagesStore = atom<DbDocumentStore<DB.Image, Partial<DB.Image>, DB.Image>>({
    documents: {},
    updates: {},
    inserts: {},
    deletes: {},
});

export class Image extends CollectionDocument<DB.Image> {}

export const Images = new DocumentCollection({
    name: 'images',
    store: imagesStore,
    api: {
        find: (queries: Partial<DB.Image>[]) => {
            return trpcClient.z.image.findMany.query({ where: { OR: queries } });
        },
        update: (id: string, data: Partial<DB.Image>) => {
            return trpcClient.z.image.update.mutate({
                where: {
                    id,
                },
                data,
            });
        },
    },
    transformer: (doc, getter) => new Image(doc, getter),
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
