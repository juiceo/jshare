import { zDB } from '@jshare/db';

import { ExpenseSharesStore } from '~/lib/store/collections/expenseShares';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ExpensesStore = new DocumentStore({
    name: 'expenses',
    schema: zDB.models.ExpenseSchema,
    api: {
        findById: trpcClient.models.expenses.findById.query,
        findMany: trpcClient.models.expenses.findMany.query,
    },
    resolvers: {
        payer: (data) => {
            return ProfilesStore.findById(data.payerId);
        },
        shares: (data) => {
            return ExpenseSharesStore.findMany({ expenseId: data.id });
        },
    },
});
