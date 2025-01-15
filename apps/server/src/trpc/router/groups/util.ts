import type { Prisma } from '@jshare/db/models';

export const defaultGroupInclude = {
    coverImage: true,
    participants: {
        include: {
            user: true,
        },
    },
} satisfies Prisma.GroupInclude;
