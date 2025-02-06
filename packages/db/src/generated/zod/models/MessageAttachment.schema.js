"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpdateSchema = exports.MessageAttachmentUpdateScalarSchema = exports.MessageAttachmentCreateSchema = exports.MessageAttachmentCreateScalarSchema = exports.MessageAttachmentPrismaUpdateSchema = exports.MessageAttachmentPrismaCreateSchema = exports.MessageAttachmentSchema = exports.MessageAttachmentScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false).nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    type: MessageAttachmentType_schema_1.MessageAttachmentTypeSchema,
}).strict();
const relationSchema = zod_1.z.object({
    message: zod_1.z.record(zod_1.z.unknown()),
    expense: zod_1.z.record(zod_1.z.unknown()).optional(),
});
const fkSchema = zod_1.z.object({
    messageId: zod_1.z.string(),
    expenseId: zod_1.z.string().nullish(),
});
/**
 * `MessageAttachment` schema excluding foreign keys and relations.
 */
exports.MessageAttachmentScalarSchema = baseSchema;
/**
 * `MessageAttachment` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.MessageAttachmentSchema = exports.MessageAttachmentScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.MessageAttachmentPrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.MessageAttachmentPrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false).nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    type: MessageAttachmentType_schema_1.MessageAttachmentTypeSchema
}).partial().passthrough();
/**
 * `MessageAttachment` schema for create operations excluding foreign keys and relations.
 */
exports.MessageAttachmentCreateScalarSchema = baseSchema.partial({
    id: true, archived: true, createdAt: true, updatedAt: true
});
/**
 * `MessageAttachment` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.MessageAttachmentCreateSchema = exports.MessageAttachmentCreateScalarSchema.merge(fkSchema);
/**
 * `MessageAttachment` schema for update operations excluding foreign keys and relations.
 */
exports.MessageAttachmentUpdateScalarSchema = baseSchema.partial();
/**
 * `MessageAttachment` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.MessageAttachmentUpdateSchema = exports.MessageAttachmentUpdateScalarSchema.merge(fkSchema.partial());
