import { zDB, type DB } from '@jshare/db';

import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ExpensesStore = new DocumentStore({
    name: 'expenses',
    schema: zDB.models.ExpenseSchema.extend({
        shares: zDB.models.ExpenseShareSchema.array(),
    }).transform((data) => data as DB.Expense<{ shares: true }>),
    api: {
        findById: trpcClient.models.expenses.findById.query,
        findMany: trpcClient.models.expenses.findMany.query,
        create: trpcClient.models.expenses.create.mutate,
    },
    resolvers: {
        payer: (data) => {
            return ProfilesStore.findById(data.payerId);
        },
    },
});
