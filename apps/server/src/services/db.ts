import type { DB } from '@jshare/db';
import { enhance, PrismaClient } from '@jshare/db/server';

const prisma = new PrismaClient();

/**
 * "Superuser" database client, bypasses all ACL checks
 */
export const db = enhance(
    prisma,
    {},
    { kinds: ['validation', 'delegate', 'password', 'encryption', 'policy'] }
);
/**
 * Get a database client that enforces ACL checks for a given user
 */
export const getDb = (user: DB.Profile) => {
    return enhance(prisma, { user });
};

export const getDbForUserId = async (userId: string) => {
    const user = await db.profile.findUnique({
        where: {
            id: userId,
        },
    });
    return enhance(prisma, user ? { user } : {});
};
