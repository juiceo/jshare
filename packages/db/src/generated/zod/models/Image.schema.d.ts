import { z } from 'zod';
/**
 * `Image` schema excluding foreign keys and relations.
 */
export declare const ImageScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    path: string;
    bucket: string;
    uploadedById: string;
    archivedAt?: Date | null | undefined;
    blurhash?: string | null | undefined;
}, {
    id: string;
    path: string;
    bucket: string;
    uploadedById: string;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const ImageSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, {
    Group: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    Profile: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    path: string;
    bucket: string;
    uploadedById: string;
    Profile?: Record<string, unknown> | undefined;
    archivedAt?: Date | null | undefined;
    Group?: Record<string, unknown> | undefined;
    blurhash?: string | null | undefined;
}, {
    id: string;
    path: string;
    bucket: string;
    uploadedById: string;
    Profile?: Record<string, unknown> | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Group?: Record<string, unknown> | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const ImagePrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
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
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
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
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    path: string;
    bucket: string;
    uploadedById: string;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    blurhash?: string | null | undefined;
}, {
    path: string;
    bucket: string;
    uploadedById: string;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const ImageCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodString;
    bucket: z.ZodString;
    uploadedById: z.ZodString;
    blurhash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    path: string;
    bucket: string;
    uploadedById: string;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    blurhash?: string | null | undefined;
}, {
    path: string;
    bucket: string;
    uploadedById: string;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    blurhash?: string | null | undefined;
}>;
/**
 * `Image` schema for update operations excluding foreign keys and relations.
 */
export declare const ImageUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
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
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    path: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
    uploadedById: z.ZodOptional<z.ZodString>;
    blurhash: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    path?: string | undefined;
    bucket?: string | undefined;
    uploadedById?: string | undefined;
    blurhash?: string | null | undefined;
}>;
