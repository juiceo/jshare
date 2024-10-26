import { i } from '@instantdb/core';

import { CurrencyCode } from '@jshare/common';

const graph = i.graph(
    {
        $users: i.entity({
            email: i.string().unique(),
        }),
        profiles: i.entity({
            userId: i.string().unique(),
            avatar: i.string().optional(),
            firstName: i.string(),
            lastName: i.string(),
        }),
        groups: i.entity({
            name: i.string(),
            currency: i.string<CurrencyCode>(),
        }),
        participants: i.entity({
            role: i.string<'admin' | 'member'>(),
            groupId: i.string(),
            userId: i.string(),
        }),
    },
    {
        usersToProfiles: {
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
        usersToParticipants: {
            reverse: {
                on: '$users',
                has: 'many',
                label: 'groups',
            },
            forward: {
                on: 'participants',
                has: 'one',
                label: 'user',
            },
        },
        groupsToParticipants: {
            reverse: {
                on: 'groups',
                has: 'many',
                label: 'participants',
            },
            forward: {
                on: 'participants',
                has: 'one',
                label: 'group',
            },
        },
    }
);

export default graph;
