import { DB } from '@jshare/db';

import { InMemoryCache } from '../services/cache';
import { db } from '../services/db';

const groupsCache = new InMemoryCache<DB.GroupParticipant[]>({ ttl: 1000 * 60 * 60 });

export class ACL {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    private async checkGroups(check: (groups: DB.GroupParticipant[]) => boolean) {
        let groups = groupsCache.get(this.userId);
        if (!groups || !check(groups)) {
            groups = await db.groupParticipant.findMany({
                where: {
                    userId: this.userId,
                },
            });
            groupsCache.set(this.userId, groups);
        }

        return check(groups);
    }

    private async getGroups(): Promise<DB.GroupParticipant[]> {
        const cached = groupsCache.get(this.userId);
        if (cached) {
            return cached;
        }
        const groups = await db.groupParticipant.findMany({
            where: {
                userId: this.userId,
            },
        });

        groupsCache.set(this.userId, groups);
        return groups;
    }

    async isInGroup(groupId: string): Promise<boolean> {
        return this.checkGroups((groups) => groups.some((g) => g.groupId === groupId));
    }

    async isGroupAdmin(groupId: string): Promise<boolean> {
        return this.checkGroups((groups) =>
            groups.some(
                (g) =>
                    g.groupId === groupId && (g.role === DB.Role.Admin || g.role === DB.Role.Owner)
            )
        );
    }
}
