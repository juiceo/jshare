import { atom, type Getter } from 'jotai';
import { v4 as uuidv4 } from 'uuid';

import { DB, type Prisma } from '@jshare/db';

import { DocumentCollection } from '~/lib/collections/Collection';
import { CollectionDocument } from '~/lib/collections/CollectionDocument';
import { Image, Images } from '~/lib/collections/images.collection';
import type { DbDocumentStore } from '~/lib/collections/types';
import { trpcClient } from '~/lib/trpc';

const profilesStore = atom<
    DbDocumentStore<DB.Profile, Partial<DB.Profile>, Prisma.ProfileCreateInput>
>({
    documents: {},
    metadata: {},
    updates: {},
    inserts: {},
    deletes: {},
});

export class Profile extends CollectionDocument<DB.Profile> {
    avatar: Image | undefined;
    constructor(data: DB.Profile, getter: Getter) {
        super(data, getter);
        this.avatar = data.avatarId ? getter(Images.findById(data.avatarId)) : undefined;
    }
}

export const Profiles = new DocumentCollection({
    name: 'profiles',
    store: profilesStore,
    loaders: {
        findByIds: (ids: string[]) => {
            return trpcClient.z.profile.findMany.query({ where: { id: { in: ids } } });
        },
        findMany: (wheres: Partial<DB.Profile>[]) => {
            return trpcClient.z.profile.findMany.query({ where: { OR: wheres } });
        },
    },
    transformer: (doc, getter) => new Profile(doc, getter),
    defaults: () => ({
        id: uuidv4(),
        email: '',
        firstName: '',
        lastName: '',
        avatarId: null,
        archived: false,
        archivedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        temporary: false,
        termsAcceptedAt: null,
        showInSearch: true,
        currency: DB.CurrencyCode.USD,
        lastActivity: new Date(),
    }),
});
