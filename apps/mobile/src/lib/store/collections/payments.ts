import { zDB, type DB } from '@jshare/db';

import { MessagesStore } from '~/lib/store/collections/messages';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { PreferencesStore } from '~/lib/store/PreferencesStore';
import { hotReloadable } from '~/lib/store/util';
import { trpcClient } from '~/lib/trpc';

export const PaymentsStore = hotReloadable(
    '__paymentsStore',
    () =>
        new DocumentStore({
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
            hooks: {
                afterCreate: (data) => {
                    MessagesStore.sync(true);
                    PreferencesStore.addUsedCurrency(data.currency);
                },
                afterUpdate: (data) => {
                    MessagesStore.sync(true);
                    PreferencesStore.addUsedCurrency(data.currency);
                },
            },
        })
);
