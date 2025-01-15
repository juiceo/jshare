import { enhance } from '@jshare/db/enhance';
import { PrismaClient } from '@jshare/db/prisma';

const prisma = new PrismaClient();
export const db = enhance(prisma);
