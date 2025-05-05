import { zDB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ExpenseSharesStore = new DocumentStore({
    name: 'expenseShares',
    schema: zDB.models.ExpenseShareSchema,
    api: {
        findById: trpcClient.models.expenseShares.findById.query,
        findMany: trpcClient.models.expenseShares.findMany.query,
    },
});
