"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateSchema = exports.MessageUpdateScalarSchema = exports.MessageCreateSchema = exports.MessageCreateScalarSchema = exports.MessagePrismaUpdateSchema = exports.MessagePrismaCreateSchema = exports.MessageSchema = exports.MessageScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    key: zod_1.z.string(),
    text: zod_1.z.string().nullish(),
    authorType: AuthorType_schema_1.AuthorTypeSchema,
}).strict();
const relationSchema = zod_1.z.object({
    author: zod_1.z.record(zod_1.z.unknown()).optional(),
    group: zod_1.z.record(zod_1.z.unknown()),
    attachments: zod_1.z.array(zod_1.z.unknown()).optional(),
});
const fkSchema = zod_1.z.object({
    authorId: zod_1.z.string().nullish(),
    groupId: zod_1.z.string(),
});
/**
 * `Message` schema excluding foreign keys and relations.
 */
exports.MessageScalarSchema = baseSchema;
/**
 * `Message` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.MessageSchema = exports.MessageScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.MessagePrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.MessagePrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    key: zod_1.z.string(),
    text: zod_1.z.string().nullish(),
    authorType: AuthorType_schema_1.AuthorTypeSchema
}).partial().passthrough();
/**
 * `Message` schema for create operations excluding foreign keys and relations.
 */
exports.MessageCreateScalarSchema = baseSchema.partial({
    id: true, archived: true, createdAt: true, updatedAt: true
});
/**
 * `Message` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.MessageCreateSchema = exports.MessageCreateScalarSchema.merge(fkSchema);
/**
 * `Message` schema for update operations excluding foreign keys and relations.
 */
exports.MessageUpdateScalarSchema = baseSchema.partial();
/**
 * `Message` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.MessageUpdateSchema = exports.MessageUpdateScalarSchema.merge(fkSchema.partial());
