import { faker } from '@faker-js/faker';
import { createClient, type User } from '@supabase/supabase-js';
import { range } from 'lodash';

import { getEnv } from '@jshare/env';

import type { PrismaClient } from '../../build';
import { TEST_USER_EMAIL } from './constants';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', { required: true });

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

export const seedUsers = async (prisma: PrismaClient, count: number = 25): Promise<User[]> => {
    const currentUsers = await supabase.auth.admin.listUsers();
    await Promise.all(
        currentUsers.data.users.map((user) => supabase.auth.admin.deleteUser(user.id))
    );

    const users = range(count)
        .map(() => {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const email = `${firstName}.${lastName}@jshare.me`.toLowerCase();

            return {
                firstName,
                lastName,
                email,
            };
        })
        .concat({
            firstName: 'Test',
            lastName: 'User',
            email: TEST_USER_EMAIL,
        });

    const createdUsers = await Promise.all(
        users.map((user) => {
            return supabase.auth.admin.createUser({
                email: user.email,
                email_confirm: true,
                password: '12345678',
                user_metadata: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                },
            });
        })
    ).then((data) => data.map((item) => item.data.user).filter((_) => !!_));

    await prisma.profile.createMany({
        data: createdUsers.map((user) => {
            return {
                userId: user.id,
                email: user.email!,
                firstName: user.user_metadata.firstName,
                lastName: user.user_metadata.lastName,
            };
        }),
    });

    return createdUsers;
};
