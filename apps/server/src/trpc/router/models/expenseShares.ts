import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zFindByIdArgs, zFindManyArgs } from './_util';

export const expenseSharesRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.expenseShare.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
        });
    }),
    findMany: authProcedure
        .input(zFindManyArgs(zDB.models.ExpenseShareSchema.pick({ expenseId: true })))
        .query(async (opts) => {
            const queries = opts.input.queries;
            return Promise.all(
                queries.map(async (query) => {
                    return db.expenseShare.findMany({
                        where: query,
                    });
                })
            );
        }),
});
