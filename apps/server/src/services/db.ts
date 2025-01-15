import { enhance, PrismaClient } from '@jshare/db/enhance';

const prisma = new PrismaClient();
export const db = enhance(prisma);
