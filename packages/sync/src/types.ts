import { z } from 'zod';

import { zDB, type Prisma } from '@jshare/db';

type LowercaseFirst<T extends string> = T extends `${infer First}${infer Rest}`
    ? `${Lowercase<First>}${Rest}`
    : T;

type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
    ? U extends Uncapitalize<U>
        ? `${Lowercase<T>}${SnakeCase<U>}`
        : `${Lowercase<T>}_${SnakeCase<Uncapitalize<U>>}`
    : S;

export type LowercaseModelName<T extends Prisma.ModelName> = LowercaseFirst<T>;
export type TableName<T extends Prisma.ModelName> = SnakeCase<LowercaseModelName<T>>;

export const getLowerCaseModelName = <T extends Prisma.ModelName>(
    modelName: T
): LowercaseModelName<T> => {
    return modelName.toLowerCase() as LowercaseModelName<T>;
};

export type ModelName = Prisma.ModelName;
export type ModelType<T extends ModelName> = z.infer<(typeof zDB.models)[`${T}UpdateSchema`]>;
export const ModelSchemas = {
    Profile: {
        item: zDB.models.ProfileSchema.required(),
        insert: zDB.models.ProfileCreateSchema,
        update: zDB.models.ProfileUpdateSchema,
    },
    Group: {
        item: zDB.models.GroupSchema.required(),
        insert: zDB.models.GroupCreateSchema,
        update: zDB.models.GroupUpdateSchema,
    },
    GroupParticipant: {
        item: zDB.models.GroupParticipantSchema.required(),
        insert: zDB.models.GroupParticipantCreateSchema,
        update: zDB.models.GroupParticipantUpdateSchema,
    },
    Message: {
        item: zDB.models.MessageSchema.required(),
        insert: zDB.models.MessageCreateSchema,
        update: zDB.models.MessageUpdateSchema,
    },
    Expense: {
        item: zDB.models.ExpenseSchema.required(),
        insert: zDB.models.ExpenseCreateSchema,
        update: zDB.models.ExpenseUpdateSchema,
    },
    ExpenseShare: {
        item: zDB.models.ExpenseShareSchema.required(),
        insert: zDB.models.ExpenseShareCreateSchema,
        update: zDB.models.ExpenseShareUpdateSchema,
    },
    Payment: {
        item: zDB.models.PaymentSchema.required(),
        insert: zDB.models.PaymentCreateSchema,
        update: zDB.models.PaymentUpdateSchema,
    },
    Image: {
        item: zDB.models.ImageSchema.required(),
        insert: zDB.models.ImageCreateSchema,
        update: zDB.models.ImageUpdateSchema,
    },
    MessageAttachment: {
        item: zDB.models.MessageAttachmentSchema.required(),
        insert: zDB.models.MessageAttachmentCreateSchema,
        update: zDB.models.MessageAttachmentUpdateSchema,
    },
    ExchangeRates: {
        item: zDB.models.ExchangeRatesSchema.required(),
        insert: zDB.models.ExchangeRatesCreateSchema,
        update: zDB.models.ExchangeRatesUpdateSchema,
    },
} as const satisfies Record<
    ModelName,
    { item: z.ZodSchema; insert: z.ZodSchema; update: z.ZodSchema }
>;

export const ModelNames = Object.keys(ModelSchemas) as ModelName[];
export const zModelName = z.custom<ModelName>((val) => {
    return typeof val === 'string' && ModelNames.includes(val as ModelName);
});

export type CollectionSyncSettings = {
    /**
     * The model name
     */
    model: Prisma.ModelName;
};

export const getInsertSchema = (modelName: Prisma.ModelName) => {
    return zDB.models[`${modelName}CreateSchema`];
};

export const getUpdateSchema = (modelName: Prisma.ModelName) => {
    return zDB.models[`${modelName}UpdateSchema`];
};

export const getItemSchema = (modelName: Prisma.ModelName) => {
    return zDB.models[`${modelName}Schema`].required();
};
