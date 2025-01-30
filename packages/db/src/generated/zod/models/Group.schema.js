"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateSchema = exports.GroupUpdateScalarSchema = exports.GroupCreateSchema = exports.GroupCreateScalarSchema = exports.GroupPrismaUpdateSchema = exports.GroupPrismaCreateSchema = exports.GroupSchema = exports.GroupScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    name: zod_1.z.string(),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    inviteCode: zod_1.z.string().nullish(),
    lastActivity: zod_1.z.coerce.date().default(() => new Date()).nullish(),
}).strict();
const relationSchema = zod_1.z.object({
    participants: zod_1.z.array(zod_1.z.unknown()).optional(),
    coverImage: zod_1.z.record(zod_1.z.unknown()).optional(),
    messages: zod_1.z.array(zod_1.z.unknown()).optional(),
    expenses: zod_1.z.array(zod_1.z.unknown()).optional(),
    payments: zod_1.z.array(zod_1.z.unknown()).optional(),
});
const fkSchema = zod_1.z.object({
    coverImageId: zod_1.z.string().nullish(),
});
/**
 * `Group` schema excluding foreign keys and relations.
 */
exports.GroupScalarSchema = baseSchema;
/**
 * `Group` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.GroupSchema = exports.GroupScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.GroupPrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.GroupPrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    name: zod_1.z.string(),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    inviteCode: zod_1.z.string().nullish(),
    lastActivity: zod_1.z.coerce.date().default(() => new Date()).nullish()
}).partial().passthrough();
/**
 * `Group` schema for create operations excluding foreign keys and relations.
 */
exports.GroupCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, lastActivity: true
});
/**
 * `Group` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.GroupCreateSchema = exports.GroupCreateScalarSchema.merge(fkSchema);
/**
 * `Group` schema for update operations excluding foreign keys and relations.
 */
exports.GroupUpdateScalarSchema = baseSchema.partial();
/**
 * `Group` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.GroupUpdateSchema = exports.GroupUpdateScalarSchema.merge(fkSchema.partial());
