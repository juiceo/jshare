import { z } from 'zod';
import type { Prisma } from '../../models';
declare type MessageInputSchemaType = {
    findUnique: z.ZodType<Prisma.MessageFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.MessageFindFirstArgs>;
    findMany: z.ZodType<Prisma.MessageFindManyArgs>;
    create: z.ZodType<Prisma.MessageCreateArgs>;
    createMany: z.ZodType<Prisma.MessageCreateManyArgs>;
    delete: z.ZodType<Prisma.MessageDeleteArgs>;
    deleteMany: z.ZodType<Prisma.MessageDeleteManyArgs>;
    update: z.ZodType<Prisma.MessageUpdateArgs>;
    updateMany: z.ZodType<Prisma.MessageUpdateManyArgs>;
    upsert: z.ZodType<Prisma.MessageUpsertArgs>;
    aggregate: z.ZodType<Prisma.MessageAggregateArgs>;
    groupBy: z.ZodType<Prisma.MessageGroupByArgs>;
    count: z.ZodType<Prisma.MessageCountArgs>;
};
export declare const MessageInputSchema: MessageInputSchemaType;
export {};
