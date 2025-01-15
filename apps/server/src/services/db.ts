import { enhance, PrismaClient } from '@jshare/db/server';

const prisma = new PrismaClient();
export const db = enhance(prisma);
