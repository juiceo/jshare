import { PrismaClient } from '../build';
import { DEFAULT_PASSWORD, TEST_USER } from './seeders/constants';
import { seedExpenses } from './seeders/expenses';
import { seedGroups } from './seeders/groups';
import { seedMessages } from './seeders/messages';
import { resetSupabase } from './seeders/reset-supabase';
import { seedUsers } from './seeders/users';

const prisma = new PrismaClient();

const main = async () => {
    console.log('Resetting Supabase users and buckts...');
    await resetSupabase();
    console.log('Seeding database...');
    const users = await seedUsers(prisma);
    console.log(`Created ${users.length} users`);
    const groups = await seedGroups(prisma, users);
    console.log(`Created ${groups.length} groups`);
    const expenses = await seedExpenses(prisma, groups);
    console.log(`Created ${expenses.length} expenses`);
    const messages = await seedMessages(prisma, groups);
    console.log(`Created ${messages.length} messages`);
};

main()
    .then(() => {
        console.log('Seeding done.\n');
        console.log(`- Run "pnpm studio" to view the database in Supabase Studio`);
        console.log(`- The primary test user email is "${TEST_USER.email}"`);
        console.log(`- The password for all users is "${DEFAULT_PASSWORD}"`);
        process.exit(0);
    })
    .catch((error) => {
        console.error('Seeding failed: ', error.message);
        process.exit(1);
    });
