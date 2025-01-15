import { z } from 'zod';
import type { Prisma } from '../../models';
declare type PaymentInputSchemaType = {
    findUnique: z.ZodType<Prisma.PaymentFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.PaymentFindFirstArgs>;
    findMany: z.ZodType<Prisma.PaymentFindManyArgs>;
    create: z.ZodType<Prisma.PaymentCreateArgs>;
    createMany: z.ZodType<Prisma.PaymentCreateManyArgs>;
    delete: z.ZodType<Prisma.PaymentDeleteArgs>;
    deleteMany: z.ZodType<Prisma.PaymentDeleteManyArgs>;
    update: z.ZodType<Prisma.PaymentUpdateArgs>;
    updateMany: z.ZodType<Prisma.PaymentUpdateManyArgs>;
    upsert: z.ZodType<Prisma.PaymentUpsertArgs>;
    aggregate: z.ZodType<Prisma.PaymentAggregateArgs>;
    groupBy: z.ZodType<Prisma.PaymentGroupByArgs>;
    count: z.ZodType<Prisma.PaymentCountArgs>;
};
export declare const PaymentInputSchema: PaymentInputSchemaType;
export {};
