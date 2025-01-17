import type { DB } from '@jshare/db';
import { enhance, PrismaClient } from '@jshare/db/server';

const prisma = new PrismaClient();

/**
 * "Superuser" database client, bypasses all ACL checks
 */
export const db = enhance(
    prisma,
    {},
    { kinds: ['validation', 'delegate', 'password', 'encryption'] }
);

/**
 * Get a database client that enforces ACL checks for a given user
 */
export const getDb = (user: DB.Profile) => {
    return enhance(prisma, { user });
};
