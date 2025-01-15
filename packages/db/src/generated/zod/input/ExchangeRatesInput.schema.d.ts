import { z } from 'zod';
import type { Prisma } from '../../models';
declare type ExchangeRatesInputSchemaType = {
    findUnique: z.ZodType<Prisma.ExchangeRatesFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ExchangeRatesFindFirstArgs>;
    findMany: z.ZodType<Prisma.ExchangeRatesFindManyArgs>;
    create: z.ZodType<Prisma.ExchangeRatesCreateArgs>;
    createMany: z.ZodType<Prisma.ExchangeRatesCreateManyArgs>;
    delete: z.ZodType<Prisma.ExchangeRatesDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ExchangeRatesDeleteManyArgs>;
    update: z.ZodType<Prisma.ExchangeRatesUpdateArgs>;
    updateMany: z.ZodType<Prisma.ExchangeRatesUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ExchangeRatesUpsertArgs>;
    aggregate: z.ZodType<Prisma.ExchangeRatesAggregateArgs>;
    groupBy: z.ZodType<Prisma.ExchangeRatesGroupByArgs>;
    count: z.ZodType<Prisma.ExchangeRatesCountArgs>;
};
export declare const ExchangeRatesInputSchema: ExchangeRatesInputSchemaType;
export {};
