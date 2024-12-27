import { faker } from '@faker-js/faker';
import { createClient, type User } from '@supabase/supabase-js';
import { range } from 'lodash';

import { getEnv } from '@jshare/env';
import { asyncMap } from '@jshare/util';

import type { PrismaClient } from '../../build';
import { TEST_USER_EMAIL, TEST_USER_PASSWORD } from './constants';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', { required: true });

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

export const seedUsers = async (prisma: PrismaClient, count: number = 25): Promise<User[]> => {
    /**
     * Delete all current users from supabase
     */
    const currentUsers = await supabase.auth.admin.listUsers();
    await Promise.all(
        currentUsers.data.users.map((user) => supabase.auth.admin.deleteUser(user.id))
    );

    const users = await asyncMap(
        range(count),
        async (index, info) => {
            console.log(`Creating user ${info.itemNumber} of ${info.itemCount}`);
            const userDetails =
                index === 0
                    ? {
                          firstName: 'Test',
                          lastName: 'User',
                          email: TEST_USER_EMAIL,
                      }
                    : {
                          firstName: faker.person.firstName(),
                          lastName: faker.person.lastName(),
                          email: `${faker.person.firstName()}.${faker.person.lastName()}@jshare.me`.toLowerCase(),
                      };

            return supabase.auth.admin.createUser({
                email: userDetails.email,
                email_confirm: true,
                password: TEST_USER_PASSWORD,
                user_metadata: {
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                },
            });
        },
        {
            concurrency: 10,
        }
    ).then((res) => res.map((item) => item.data.user).filter((user) => !!user));

    await prisma.profile.createMany({
        data: users.map((user) => {
            return {
                userId: user.id,
                email: user.email!,
                firstName: user.user_metadata.firstName,
                lastName: user.user_metadata.lastName,
            };
        }),
    });

    return users;
};
