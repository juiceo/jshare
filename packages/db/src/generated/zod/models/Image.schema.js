"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateSchema = exports.ImageUpdateScalarSchema = exports.ImageCreateSchema = exports.ImageCreateScalarSchema = exports.ImagePrismaUpdateSchema = exports.ImagePrismaCreateSchema = exports.ImageSchema = exports.ImageScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false).nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    path: zod_1.z.string(),
    bucket: zod_1.z.string(),
    uploadedById: zod_1.z.string(),
    blurhash: zod_1.z.string().nullish(),
}).strict();
const relationSchema = zod_1.z.object({
    Group: zod_1.z.array(zod_1.z.unknown()).optional(),
    Profile: zod_1.z.array(zod_1.z.unknown()).optional(),
});
/**
 * `Image` schema excluding foreign keys and relations.
 */
exports.ImageScalarSchema = baseSchema;
/**
 * `Image` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.ImageSchema = exports.ImageScalarSchema.merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.ImagePrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.ImagePrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false).nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    path: zod_1.z.string(),
    bucket: zod_1.z.string(),
    uploadedById: zod_1.z.string(),
    blurhash: zod_1.z.string().nullish()
}).partial().passthrough();
/**
 * `Image` schema for create operations excluding foreign keys and relations.
 */
exports.ImageCreateScalarSchema = baseSchema.partial({
    id: true, archived: true, createdAt: true, updatedAt: true
});
/**
 * `Image` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.ImageCreateSchema = baseSchema.partial({
    id: true, archived: true, createdAt: true, updatedAt: true
});
/**
 * `Image` schema for update operations excluding foreign keys and relations.
 */
exports.ImageUpdateScalarSchema = baseSchema.partial();
/**
 * `Image` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.ImageUpdateSchema = exports.ImageUpdateScalarSchema;
