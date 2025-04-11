import { z } from 'zod';

import { getLowerCaseModelName, ModelSchemas } from '@jshare/sync';

import { getDbForUserId } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zFindByIdInput, zSyncPullInput, zSyncPushInput } from './schemas';

export const syncRouter = router({
    pull: authProcedure.input(zSyncPullInput).query(async (opts) => {
        const db = await getDbForUserId(opts.ctx.userId);

        switch (opts.input.model) {
            case 'Profile': {
                const [modified, added, removed] = await Promise.all([
                    db.profile.findMany({
                        where: {
                            updatedAt: opts.input.since
                                ? {
                                      gt: new Date(opts.input.since),
                                  }
                                : undefined,
                        },
                    }),
                    db.profile.findMany({
                        where: {
                            createdAt: opts.input.since
                                ? {
                                      gt: new Date(opts.input.since),
                                  }
                                : undefined,
                        },
                    }),
                    db.profile.findMany({
                        where: {
                            archivedAt: opts.input.since
                                ? { gt: new Date(opts.input.since) }
                                : undefined,
                        },
                    }),
                ]);

                return {
                    added,
                    modified,
                    removed,
                };
            }
            case 'Image': {
                const [modified, added, removed] = await Promise.all([
                    db.image.findMany({
                        where: {
                            updatedAt: opts.input.since
                                ? {
                                      gt: new Date(opts.input.since),
                                  }
                                : undefined,
                        },
                    }),
                    db.image.findMany({
                        where: {
                            createdAt: opts.input.since
                                ? {
                                      gt: new Date(opts.input.since),
                                  }
                                : undefined,
                        },
                    }),
                    db.image.findMany({
                        where: {
                            archivedAt: opts.input.since
                                ? { gt: new Date(opts.input.since) }
                                : undefined,
                        },
                    }),
                ]);

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
        const db = await getDbForUserId(opts.ctx.userId);
        switch (opts.input.model) {
            case 'Profile': {
                const inserts = getInserts(opts.input.changes.added, ModelSchemas.Profile.insert);
                const updates = getUpdates(
                    opts.input.changes.modified,
                    ModelSchemas.Profile.update
                );

                const removals = opts.input.changes.removed;

                await Promise.all([
                    inserts
                        ? db.profile.createMany({
                              data: inserts,
                          })
                        : null,
                    ...updates.map((update) => {
                        return db.profile.update({
                            where: {
                                id: update.id,
                            },
                            data: update,
                        });
                    }),
                    ...removals.map((removal) => {
                        return db.profile.update({
                            where: {
                                id: removal.id,
                            },
                            data: {
                                archived: true,
                                archivedAt: new Date(),
                            },
                        });
                    }),
                ]).catch(() => {});
            }
        }
    }),
    findById: authProcedure.input(zFindByIdInput).query(async (opts) => {
        const db = await getDbForUserId(opts.ctx.userId);
        const dbKey = getLowerCaseModelName(opts.input.model);
        const dbInstance = db[dbKey];

        return (dbInstance as any).findUnique({
            where: {
                id: opts.input.id,
            },
        });
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
