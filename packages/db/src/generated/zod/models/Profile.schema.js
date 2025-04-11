"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateSchema = exports.ProfileUpdateScalarSchema = exports.ProfileCreateSchema = exports.ProfileCreateScalarSchema = exports.ProfilePrismaUpdateSchema = exports.ProfilePrismaCreateSchema = exports.ProfileSchema = exports.ProfileScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false),
    archivedAt: zod_1.z.coerce.date().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    email: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    lastActivity: zod_1.z.coerce.date().default(() => new Date()),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    temporary: zod_1.z.boolean().nullish(),
    termsAcceptedAt: zod_1.z.coerce.date().nullish(),
    showInSearch: zod_1.z.boolean().default(true),
}).strict();
const relationSchema = zod_1.z.object({
    groups: zod_1.z.array(zod_1.z.unknown()).optional(),
    avatar: zod_1.z.record(zod_1.z.unknown()).optional(),
    messages: zod_1.z.array(zod_1.z.unknown()).optional(),
    expensesOwned: zod_1.z.array(zod_1.z.unknown()).optional(),
    expensesPaid: zod_1.z.array(zod_1.z.unknown()).optional(),
    expenseShares: zod_1.z.array(zod_1.z.unknown()).optional(),
    paymentsReceived: zod_1.z.array(zod_1.z.unknown()).optional(),
    paymentsPaid: zod_1.z.array(zod_1.z.unknown()).optional(),
});
const fkSchema = zod_1.z.object({
    avatarId: zod_1.z.string().nullish(),
});
/**
 * `Profile` schema excluding foreign keys and relations.
 */
exports.ProfileScalarSchema = baseSchema;
/**
 * `Profile` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.ProfileSchema = exports.ProfileScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.ProfilePrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.ProfilePrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false),
    archivedAt: zod_1.z.coerce.date().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    email: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    lastActivity: zod_1.z.coerce.date().default(() => new Date()),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    temporary: zod_1.z.boolean().nullish(),
    termsAcceptedAt: zod_1.z.coerce.date().nullish(),
    showInSearch: zod_1.z.boolean().default(true)
}).partial().passthrough();
/**
 * `Profile` schema for create operations excluding foreign keys and relations.
 */
exports.ProfileCreateScalarSchema = baseSchema.partial({
    id: true, archived: true, createdAt: true, updatedAt: true, lastActivity: true, showInSearch: true
});
/**
 * `Profile` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.ProfileCreateSchema = exports.ProfileCreateScalarSchema.merge(fkSchema);
/**
 * `Profile` schema for update operations excluding foreign keys and relations.
 */
exports.ProfileUpdateScalarSchema = baseSchema.partial();
/**
 * `Profile` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.ProfileUpdateSchema = exports.ProfileUpdateScalarSchema.merge(fkSchema.partial());
