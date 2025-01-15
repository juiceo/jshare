import { z } from 'zod';
import type { Prisma } from '../../models';
declare type ExpenseShareInputSchemaType = {
    findUnique: z.ZodType<Prisma.ExpenseShareFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ExpenseShareFindFirstArgs>;
    findMany: z.ZodType<Prisma.ExpenseShareFindManyArgs>;
    create: z.ZodType<Prisma.ExpenseShareCreateArgs>;
    createMany: z.ZodType<Prisma.ExpenseShareCreateManyArgs>;
    delete: z.ZodType<Prisma.ExpenseShareDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ExpenseShareDeleteManyArgs>;
    update: z.ZodType<Prisma.ExpenseShareUpdateArgs>;
    updateMany: z.ZodType<Prisma.ExpenseShareUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ExpenseShareUpsertArgs>;
    aggregate: z.ZodType<Prisma.ExpenseShareAggregateArgs>;
    groupBy: z.ZodType<Prisma.ExpenseShareGroupByArgs>;
    count: z.ZodType<Prisma.ExpenseShareCountArgs>;
};
export declare const ExpenseShareInputSchema: ExpenseShareInputSchemaType;
export {};
