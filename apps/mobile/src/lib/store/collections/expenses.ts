import { zDB, type DB } from '@jshare/db';

import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

const schema = zDB.models.ExpenseSchema.extend({
    shares: zDB.models.ExpenseShareSchema.array(),
}) as Zod.ZodSchema<DB.Expense<{ shares: true }>>;

export const ExpensesStore = new DocumentStore({
    name: 'expenses',
    schema,
    mode: 'sync',
    api: {
        sync: trpcClient.models.expenses.sync.query,
        create: trpcClient.models.expenses.create.mutate,
        update: trpcClient.models.expenses.update.mutate,
        delete: trpcClient.models.expenses.delete.mutate,
    },
    resolvers: {
        payer: (data) => {
            return ProfilesStore.findById(data.payerId);
        },
    },
});
