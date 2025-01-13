import type { Prisma } from '@jshare/db/prisma';

export const defaultGroupInclude = {
    coverImage: true,
    participants: {
        include: {
            user: true,
        },
    },
} satisfies Prisma.GroupInclude;
