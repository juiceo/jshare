import { i } from '@instantdb/core';

export const graph = i.graph(
    {
        $users: i.entity({
            email: i.string().unique(),
        }),
        profiles: i.entity({
            userId: i.string().unique(),
            firstName: i.string(),
            lastName: i.string(),
        }),
        groups: i.entity({
            groupId: i.string().unique(),
            name: i.string(),
        }),
        groupMemberships: i.entity({
            userId: i.string(),
            groupId: i.string(),
            admin: i.boolean(),
        }),
    },
    {
        userProfiles: {
            reverse: {
                on: '$users',
                has: 'one',
                label: 'profile',
            },
            forward: {
                on: 'profiles',
                has: 'one',
                label: 'user',
            },
        },
        groupMembers: {
            reverse: {
                on: 'groups',
                has: 'many',
                label: 'members',
            },
            forward: {
                on: 'groupMemberships',
                has: 'one',
                label: 'group',
            },
        },
        userGroupMemberships: {
            reverse: {
                on: '$users',
                has: 'many',
                label: 'groupMemberships',
            },
            forward: {
                on: 'groupMemberships',
                has: 'one',
                label: 'user',
            },
        },
    }
);

export default graph;
