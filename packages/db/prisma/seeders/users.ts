import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

import { getEnv } from '@jshare/env';
import { asyncMap } from '@jshare/util';

import type { PrismaClient, Profile } from '../../build';
import { DEFAULT_PASSWORD, USERS } from './constants';

const supabaseUrl = getEnv('SUPABASE_API_URL', { required: true });
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY', { required: true });

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

export const seedUsers = async (prisma: PrismaClient): Promise<Profile[]> => {
    /**
     * Delete all current users from supabase
     */
    const currentUsers = await supabase.auth.admin.listUsers();
    await Promise.all(
        currentUsers.data.users.map((user) => supabase.auth.admin.deleteUser(user.id))
    );

    const users = await asyncMap(
        USERS,
        async (user, info) => {
            console.log(`Creating user ${info.itemNumber} of ${info.itemCount}`);

            const avatarFile = user.avatar
                ? await fs.readFileSync(path.join(__dirname, 'avatars', user.avatar))
                : null;
            const avatar =
                user.avatar && avatarFile
                    ? await supabase.storage.from('uploads').upload(user.avatar, avatarFile, {
                          contentType: 'image/jpeg',
                      })
                    : null;

            const supabaseUser = await supabase.auth.admin.createUser({
                email: user.email,
                email_confirm: true,
                password: DEFAULT_PASSWORD,
                user_metadata: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                },
            });

            if (!supabaseUser.data.user) {
                throw new Error('Failed to create user');
            }

            return prisma.profile.create({
                data: {
                    userId: supabaseUser.data.user.id,
                    email: user.email!,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    avatar: avatar?.data
                        ? {
                              create: {
                                  id: avatar.data.id,
                                  path: avatar.data.path,
                                  bucket: 'uploads',
                                  uploadedById: supabaseUser.data.user.id,
                              },
                          }
                        : undefined,
                },
            });
        },
        {
            concurrency: 4,
        }
    );

    return users;
};
