import { PrismaClient } from '../build';
import { seedAuthUsers } from './seeders/authUsers';

const prisma = new PrismaClient();

const main = async () => {
    const users = await seedAuthUsers(prisma);
};

main()
    .then(() => {
        console.log('Seeding done.');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Seeding failed: ', error.message);
        process.exit(1);
    });
