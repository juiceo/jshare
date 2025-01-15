import { z } from 'zod';
import type { Prisma } from '../../models';
declare type ProfileInputSchemaType = {
    findUnique: z.ZodType<Prisma.ProfileFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ProfileFindFirstArgs>;
    findMany: z.ZodType<Prisma.ProfileFindManyArgs>;
    create: z.ZodType<Prisma.ProfileCreateArgs>;
    createMany: z.ZodType<Prisma.ProfileCreateManyArgs>;
    delete: z.ZodType<Prisma.ProfileDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ProfileDeleteManyArgs>;
    update: z.ZodType<Prisma.ProfileUpdateArgs>;
    updateMany: z.ZodType<Prisma.ProfileUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ProfileUpsertArgs>;
    aggregate: z.ZodType<Prisma.ProfileAggregateArgs>;
    groupBy: z.ZodType<Prisma.ProfileGroupByArgs>;
    count: z.ZodType<Prisma.ProfileCountArgs>;
};
export declare const ProfileInputSchema: ProfileInputSchemaType;
export {};
