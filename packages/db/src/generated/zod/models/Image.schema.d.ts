import { z } from 'zod';
/**
 * `Image` schema excluding foreign keys and relations.
 */
export declare const ImageScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    path: string;
    bucket: string;
    uploadedById: string;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}, {
    id: string;
    path: string;
    bucket: string;
    uploadedById: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const ImageSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, {
    Group: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    Profile: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
}>, "strip", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    path: string;
    bucket: string;
    uploadedById: string;
    Profile?: unknown[] | undefined;
    Group?: unknown[] | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}, {
    id: string;
    path: string;
    bucket: string;
    uploadedById: string;
    Profile?: unknown[] | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Group?: unknown[] | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const ImagePrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const ImagePrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `Image` schema for create operations excluding foreign keys and relations.
 */
export declare const ImageCreateScalarSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    path: string;
    bucket: string;
    uploadedById: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}, {
    path: string;
    bucket: string;
    uploadedById: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const ImageCreateSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    path: string;
    bucket: string;
    uploadedById: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}, {
    path: string;
    bucket: string;
    uploadedById: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema for update operations excluding foreign keys and relations.
 */
export declare const ImageUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strict", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const ImageUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strict", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}>;
