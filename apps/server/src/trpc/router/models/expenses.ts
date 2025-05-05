import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zFindByIdArgs, zFindManyArgs } from './_util';

export const expensesRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.expense.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
        });
    }),
    findMany: authProcedure
        .input(zFindManyArgs(zDB.models.ExpenseSchema.pick({ groupId: true })))
        .query(async (opts) => {
            const queries = opts.input.queries;
            return Promise.all(
                queries.map(async (query) => {
                    return db.expense.findMany({
                        where: query,
                    });
                })
            );
        }),
});
