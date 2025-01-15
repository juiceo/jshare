import { z } from 'zod';
import type { Prisma } from '../../models';
declare type GroupParticipantInputSchemaType = {
    findUnique: z.ZodType<Prisma.GroupParticipantFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.GroupParticipantFindFirstArgs>;
    findMany: z.ZodType<Prisma.GroupParticipantFindManyArgs>;
    create: z.ZodType<Prisma.GroupParticipantCreateArgs>;
    createMany: z.ZodType<Prisma.GroupParticipantCreateManyArgs>;
    delete: z.ZodType<Prisma.GroupParticipantDeleteArgs>;
    deleteMany: z.ZodType<Prisma.GroupParticipantDeleteManyArgs>;
    update: z.ZodType<Prisma.GroupParticipantUpdateArgs>;
    updateMany: z.ZodType<Prisma.GroupParticipantUpdateManyArgs>;
    upsert: z.ZodType<Prisma.GroupParticipantUpsertArgs>;
    aggregate: z.ZodType<Prisma.GroupParticipantAggregateArgs>;
    groupBy: z.ZodType<Prisma.GroupParticipantGroupByArgs>;
    count: z.ZodType<Prisma.GroupParticipantCountArgs>;
};
export declare const GroupParticipantInputSchema: GroupParticipantInputSchemaType;
export {};
