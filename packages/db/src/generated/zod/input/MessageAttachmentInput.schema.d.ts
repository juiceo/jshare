import { z } from 'zod';
import type { Prisma } from '../../models';
declare type MessageAttachmentInputSchemaType = {
    findUnique: z.ZodType<Prisma.MessageAttachmentFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.MessageAttachmentFindFirstArgs>;
    findMany: z.ZodType<Prisma.MessageAttachmentFindManyArgs>;
    create: z.ZodType<Prisma.MessageAttachmentCreateArgs>;
    createMany: z.ZodType<Prisma.MessageAttachmentCreateManyArgs>;
    delete: z.ZodType<Prisma.MessageAttachmentDeleteArgs>;
    deleteMany: z.ZodType<Prisma.MessageAttachmentDeleteManyArgs>;
    update: z.ZodType<Prisma.MessageAttachmentUpdateArgs>;
    updateMany: z.ZodType<Prisma.MessageAttachmentUpdateManyArgs>;
    upsert: z.ZodType<Prisma.MessageAttachmentUpsertArgs>;
    aggregate: z.ZodType<Prisma.MessageAttachmentAggregateArgs>;
    groupBy: z.ZodType<Prisma.MessageAttachmentGroupByArgs>;
    count: z.ZodType<Prisma.MessageAttachmentCountArgs>;
};
export declare const MessageAttachmentInputSchema: MessageAttachmentInputSchemaType;
export {};
