import { z } from 'zod';
import type { Prisma } from '../../models';
declare type ExpenseInputSchemaType = {
    findUnique: z.ZodType<Prisma.ExpenseFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ExpenseFindFirstArgs>;
    findMany: z.ZodType<Prisma.ExpenseFindManyArgs>;
    create: z.ZodType<Prisma.ExpenseCreateArgs>;
    createMany: z.ZodType<Prisma.ExpenseCreateManyArgs>;
    delete: z.ZodType<Prisma.ExpenseDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ExpenseDeleteManyArgs>;
    update: z.ZodType<Prisma.ExpenseUpdateArgs>;
    updateMany: z.ZodType<Prisma.ExpenseUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ExpenseUpsertArgs>;
    aggregate: z.ZodType<Prisma.ExpenseAggregateArgs>;
    groupBy: z.ZodType<Prisma.ExpenseGroupByArgs>;
    count: z.ZodType<Prisma.ExpenseCountArgs>;
};
export declare const ExpenseInputSchema: ExpenseInputSchemaType;
export {};
