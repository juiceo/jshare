import { DB } from '@jshare/db';

import { InMemoryCache } from '../services/cache';
import { db } from '../services/db';

const groupsCache = new InMemoryCache<DB.GroupParticipant[]>({ ttl: 1000 * 60 * 60 });

export class ACL {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
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

    private async getGroup(id: string): Promise<DB.GroupParticipant | null> {
        const groups = await this.getGroups();
        return groups.find((g) => g.groupId === id) ?? null;
    }

    async isInGroup(groupId: string, ignoreCache?: boolean): Promise<boolean> {
        const group = await this.getGroup(groupId);
        return !!group;
    }

    async isGroupAdmin(groupId: string): Promise<boolean> {
        const group = await this.getGroup(groupId);
        return group?.role === DB.Role.Admin || group?.role === DB.Role.Owner;
    }

    async getGroupIds(): Promise<string[]> {
        const groups = await this.getGroups();
        return groups.map((g) => g.groupId);
    }
}
