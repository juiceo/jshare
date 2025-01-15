import { z } from 'zod';
import type { Prisma } from '../../models';
declare type ImageInputSchemaType = {
    findUnique: z.ZodType<Prisma.ImageFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ImageFindFirstArgs>;
    findMany: z.ZodType<Prisma.ImageFindManyArgs>;
    create: z.ZodType<Prisma.ImageCreateArgs>;
    createMany: z.ZodType<Prisma.ImageCreateManyArgs>;
    delete: z.ZodType<Prisma.ImageDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ImageDeleteManyArgs>;
    update: z.ZodType<Prisma.ImageUpdateArgs>;
    updateMany: z.ZodType<Prisma.ImageUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ImageUpsertArgs>;
    aggregate: z.ZodType<Prisma.ImageAggregateArgs>;
    groupBy: z.ZodType<Prisma.ImageGroupByArgs>;
    count: z.ZodType<Prisma.ImageCountArgs>;
};
export declare const ImageInputSchema: ImageInputSchemaType;
export {};
