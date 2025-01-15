import { z } from 'zod';
import type { Prisma } from '../../models';
declare type GroupInputSchemaType = {
    findUnique: z.ZodType<Prisma.GroupFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.GroupFindFirstArgs>;
    findMany: z.ZodType<Prisma.GroupFindManyArgs>;
    create: z.ZodType<Prisma.GroupCreateArgs>;
    createMany: z.ZodType<Prisma.GroupCreateManyArgs>;
    delete: z.ZodType<Prisma.GroupDeleteArgs>;
    deleteMany: z.ZodType<Prisma.GroupDeleteManyArgs>;
    update: z.ZodType<Prisma.GroupUpdateArgs>;
    updateMany: z.ZodType<Prisma.GroupUpdateManyArgs>;
    upsert: z.ZodType<Prisma.GroupUpsertArgs>;
    aggregate: z.ZodType<Prisma.GroupAggregateArgs>;
    groupBy: z.ZodType<Prisma.GroupGroupByArgs>;
    count: z.ZodType<Prisma.GroupCountArgs>;
};
export declare const GroupInputSchema: GroupInputSchemaType;
export {};
