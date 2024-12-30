import type { GroupParticipant } from '@jshare/db';

import { InMemoryCache } from '../services/cache';
import { prisma } from '../services/prisma';

const groupsCache = new InMemoryCache<GroupParticipant[]>({ ttl: 1000 * 60 * 60 });

export class ACL {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    private async getUserGroups(ignoreCache?: boolean) {
        const cached = !ignoreCache ? groupsCache.get(this.userId) : null;
        if (cached) {
            return cached;
        }
        const groups = await prisma.groupParticipant.findMany({
            where: {
                userId: this.userId,
            },
        });

        groupsCache.set(this.userId, groups);
        return groups;
    }

    async isUserInGroup(groupId: string, ignoreCache?: boolean): Promise<boolean> {
        const groups = await this.getUserGroups(ignoreCache);
        if (groups.some((g) => g.groupId === groupId)) {
            return true;
        }
        if (!ignoreCache) {
            return this.isUserInGroup(groupId, true);
        }
        return false;
    }
}
