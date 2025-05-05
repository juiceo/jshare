import { zDB } from '@jshare/db';

import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const PaymentsStore = new DocumentStore({
    name: 'payments',
    schema: zDB.models.PaymentSchema,
    api: {
        findById: trpcClient.models.payments.findById.query,
        findMany: trpcClient.models.payments.findMany.query,
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
