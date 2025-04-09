import { z } from 'zod';

import type { DB } from '@jshare/db';
import { ModelSchemas } from '@jshare/sync';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zSyncPullInput, zSyncPushInput } from './schemas';

export const syncRouter = router({
    pull: authProcedure.input(zSyncPullInput).query(async (opts) => {
        const userId = opts.ctx.userId;

        switch (opts.input.model) {
            case 'Profile': {
                const modified = await db.profile.findMany({
                    where: {
                        id: userId,
                        updatedAt: opts.input.since
                            ? {
                                  gt: new Date(opts.input.since),
                              }
                            : undefined,
                    },
                });
                const added = await db.profile.findMany({
                    where: {
                        id: userId,
                        createdAt: opts.input.since
                            ? {
                                  gt: new Date(opts.input.since),
                              }
                            : undefined,
                    },
                });
                const removed = [] as DB.Profile[];

                return {
                    added,
                    modified,
                    removed,
                };
            }
            default: {
                return {
                    added: [],
                    modified: [],
                    removed: [],
                };
            }
        }
    }),
    push: authProcedure.input(zSyncPushInput).mutation(async (opts) => {
        switch (opts.input.model) {
            case 'Profile': {
                const inserts = getInserts(opts.input.changes.added, ModelSchemas.Profile.insert);
                const updates = getUpdates(
                    opts.input.changes.modified,
                    ModelSchemas.Profile.update
                );

                await Promise.all([
                    db.profile.createMany({
                        data: inserts,
                    }),
                    ...updates.map((update) => {
                        return db.profile.update({
                            where: {
                                id: update.id,
                            },
                            data: update,
                        });
                    }),
                ]);

                /**
                 * TODO: Handle removals
                 */
            }
        }
    }),
});

const getInserts = <TSchema extends Zod.ZodObject<any>>(
    data: any[],
    schema: TSchema
): z.infer<TSchema>[] => {
    return data
        .map((item) => {
            const parsed = schema
                .omit({ id: true, createdAt: true, updatedAt: true })
                .strip()
                .safeParse(item);
            return parsed.success ? parsed.data : null;
        })
        .filter((insert) => !!insert);
};

const getUpdates = <TSchema extends Zod.ZodObject<any>>(
    data: any[],
    schema: TSchema
): z.infer<TSchema>[] => {
    return data
        .map((item) => {
            const parsed = schema
                .required({ id: true })
                .omit({ createdAt: true, updatedAt: true })
                .strip()
                .safeParse(item);
            return parsed.success ? parsed.data : null;
        })
        .filter((update) => !!update);
};
