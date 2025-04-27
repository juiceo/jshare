import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { DocumentCollection } from '~/lib/collections/Collection';
import { trpcClient } from '~/lib/trpc';

type ProfileUpdateInput = Partial<Omit<DB.Profile, 'id' | 'createdAt' | 'updatedAt'>>;
type ProfileCreateInput = Partial<Omit<DB.Profile, 'createdAt' | 'updatedAt'>> &
    Pick<DB.Profile, 'firstName' | 'lastName' | 'email' | 'avatarId' | 'currency'>;

export const Profiles = new DocumentCollection<
    DB.Profile<{ avatar: true }>,
    ProfileUpdateInput,
    ProfileCreateInput
>({
    name: 'profiles',
    api: {
        find: async (queries: Partial<DB.Profile>[]) => {
            return trpcClient.z.profile.findMany.query({
                where: { OR: queries },
                include: { avatar: true },
            }) as Promise<DB.Profile<{ avatar: true }>[]>;
        },
        update: async (id: string, data: ProfileUpdateInput) => {
            return trpcClient.z.profile.update.mutate({
                where: {
                    id,
                },
                data,
                include: {
                    avatar: true,
                },
            }) as Promise<DB.Profile<{ avatar: true }>>;
        },
        create: async (data: ProfileCreateInput) => {
            return trpcClient.z.profile.create.mutate({
                data,
                include: {
                    avatar: true,
                },
            }) as Promise<DB.Profile<{ avatar: true }>>;
        },
    },
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
        avatar: null,
    }),
});
