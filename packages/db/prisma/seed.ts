import { generateMock } from '@anatine/zod-mock';
import { faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js';
import { range } from 'lodash';

import { PrismaClient } from '../src/generated/prisma';
import { models } from '../src/generated/zod';

const prisma = new PrismaClient();

export const supabase = createClient(
    process.env.SUPABASE_API_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const main = async () => {
    const emails = range(25).map(() => faker.internet.email());

    console.log('Creating supabase users...');
    const supabaseUsers = await Promise.all(
        emails.map((email) =>
            supabase.auth.admin.createUser({
                email,
                email_confirm: true,
            })
        )
    ).then((res) => res.map((item) => item.data.user).filter((user) => !!user));

    console.log('Creating profiles...');
    const users = await prisma.profile.createManyAndReturn({
        data: supabaseUsers.map((user) => {
            return {
                ...generateMock(models.ProfileCreateScalarSchema),
                userId: user.id,
                email: user.email!,
            };
        }),
    });

    console.log('Creating personal groups...');
    await Promise.all(
        users.map(async (user) => {
            return prisma.group.create({
                data: {
                    name: `${user.firstName}'s group`,
                    currency: user.currency,
                    participants: {
                        createMany: {
                            data: [
                                {
                                    userId: user.userId,
                                    role: 'Owner',
                                },
                            ],
                        },
                    },
                },
            });
        })
    );

    console.log('Creating shared group...');
    await prisma.group.create({
        data: {
            name: 'Shared group',
            currency: 'USD',
            participants: {
                createMany: {
                    data: supabaseUsers.map((user, index) => ({
                        userId: user.id,
                        role: index === 0 ? 'Owner' : 'Member',
                    })),
                },
            },
        },
    });

    return users;
};

main()
    .then((users) => {
        console.log('Seeding done.\n');
        console.log(`- Run "pnpm studio" to view the database in Supabase Studio`);
        console.log(`- The primary test user email is ${users[0].email}`);
        console.log(
            `- You can access their email inbox to get the login code by running "pnpm inbox"`
        );

        process.exit(0);
    })
    .catch((error) => {
        console.error('Seeding failed: ', error.message);
        process.exit(1);
    });
