import { faker } from '@faker-js/faker';
import { type User } from '@supabase/supabase-js';
import { random, range, sampleSize } from 'lodash';

import type { Group, PrismaClient, Profile } from '../../build';
import { TEST_USER } from './constants';

export const seedGroups = async (prisma: PrismaClient, users: Profile[]): Promise<Group[]> => {
    const mainGroup = await prisma.group.create({
        data: {
            name: 'Main test group',
            currency: 'USD',
            participants: {
                createMany: {
                    data: users.map((user) => {
                        return {
                            userId: user.userId,
                            role:
                                user.email === TEST_USER.email
                                    ? 'Owner'
                                    : Math.random() > 0.1
                                      ? 'Admin'
                                      : 'Member',
                        };
                    }),
                },
            },
        },
    });

    const otherGroups = await Promise.all(
        range(5).map(() => {
            return prisma.group.create({
                data: {
                    name: faker.company.name(),
                    currency: 'USD',
                    participants: {
                        createMany: {
                            data: sampleSize(users, random(3, 8)).map((user, index) => {
                                return {
                                    userId: user.userId,
                                    role:
                                        index === 0
                                            ? 'Owner'
                                            : Math.random() > 0.1
                                              ? 'Admin'
                                              : 'Member',
                                };
                            }),
                        },
                    },
                },
            });
        })
    );

    return [mainGroup, ...otherGroups];
};
