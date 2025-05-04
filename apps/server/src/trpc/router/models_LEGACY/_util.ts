import { z } from 'zod';

export const zID = z.string().uuid('Must be a valid UUID');

export const zFindByIdArgs = z.object({
    id: zID,
});

export const zUpdateArgs = <TUpdateSchema extends Zod.ZodObject<any>>(schema: TUpdateSchema) =>
    z.object({
        id: zID,
        data: schema
            .omit({
                id: true,
                createdAt: true,
                updatedAt: true,
            })
            .partial(),
    });

export const zCreateArgs = <TCreateSchema extends Zod.ZodObject<any>>(schema: TCreateSchema) =>
    schema.omit({
        createdAt: true,
        updatedAt: true,
    });

export const zDeleteArgs = z.object({
    id: zID,
});
