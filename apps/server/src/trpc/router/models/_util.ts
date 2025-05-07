import { isEmpty } from 'lodash';
import { z } from 'zod';

export const zID = z.string().uuid('Must be a valid UUID');

export const zFindByIdArgs = z.object({
    ids: zID.array(),
});

export const zSyncArgs = z.object({
    lastSync: z.number(),
});

export const zFindManyArgs = <TAllowedFields extends Zod.ZodObject<any>>(
    schema: TAllowedFields,
    opts?: { allowEmpty?: boolean }
) =>
    z.object({
        queries: schema
            .partial()
            .refine<z.infer<TAllowedFields>>(
                (value): value is TAllowedFields => {
                    if (!isEmpty(value)) return true;
                    if (opts?.allowEmpty) {
                        return true;
                    }

                    return false;
                },
                {
                    message: 'Empty queries (find all) is not allowed for this model',
                }
            )
            .array(),
    });

export const zUpdateArgs = <TUpdateSchema extends Zod.ZodObject<any>>(schema: TUpdateSchema) =>
    z.object({
        id: zID,
        data: schema.omit({ id: true, createdAt: true, updatedAt: true }) as TUpdateSchema,
    });

export const zCreateArgs = <TCreateSchema extends Zod.ZodObject<any>>(schema: TCreateSchema) =>
    z.object({
        id: zID,
        data: schema.omit({ id: true, createdAt: true, updatedAt: true }) as TCreateSchema,
    });

export const zDeleteArgs = z.object({
    id: zID,
});
