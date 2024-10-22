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
    }
);

export default graph;
