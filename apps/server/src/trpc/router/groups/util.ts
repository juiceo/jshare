import type { Prisma } from '@jshare/db';

export const defaultGroupInclude = {
    coverImage: true,
    participants: {
        include: {
            user: true,
        },
    },
} satisfies Prisma.GroupInclude;
