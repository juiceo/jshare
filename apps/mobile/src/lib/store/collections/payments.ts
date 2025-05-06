import { zDB, type DB } from '@jshare/db';

import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const PaymentsStore = new DocumentStore({
    name: 'payments',
    schema: zDB.models.PaymentSchema as Zod.ZodSchema<DB.Payment>,
    mode: 'sync',
    api: {
        sync: trpcClient.models.payments.sync.query,
        create: trpcClient.models.payments.create.mutate,
    },
    resolvers: {
        payer: (data) => {
            return ProfilesStore.findById(data.payerId);
        },
        recipient: (data) => {
            return ProfilesStore.findById(data.recipientId);
        },
    },
});
