"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpdateSchema = exports.ExpenseShareUpdateScalarSchema = exports.ExpenseShareCreateSchema = exports.ExpenseShareCreateScalarSchema = exports.ExpenseSharePrismaUpdateSchema = exports.ExpenseSharePrismaCreateSchema = exports.ExpenseShareSchema = exports.ExpenseShareScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const CurrencyConversion_schema_1 = require("./CurrencyConversion.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    amount: zod_1.z.number(),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    locked: zod_1.z.boolean().default(false),
    conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).nullish(),
}).strict();
const relationSchema = zod_1.z.object({
    user: zod_1.z.record(zod_1.z.unknown()),
    expense: zod_1.z.record(zod_1.z.unknown()),
});
const fkSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    expenseId: zod_1.z.string(),
});
/**
 * `ExpenseShare` schema excluding foreign keys and relations.
 */
exports.ExpenseShareScalarSchema = baseSchema;
/**
 * `ExpenseShare` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.ExpenseShareSchema = exports.ExpenseShareScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.ExpenseSharePrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.ExpenseSharePrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    amount: zod_1.z.union([zod_1.z.number(), zod_1.z.record(zod_1.z.unknown())]),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    locked: zod_1.z.boolean().default(false),
    conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).nullish()
}).partial().passthrough();
/**
 * `ExpenseShare` schema for create operations excluding foreign keys and relations.
 */
exports.ExpenseShareCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true, locked: true
});
/**
 * `ExpenseShare` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.ExpenseShareCreateSchema = exports.ExpenseShareCreateScalarSchema.merge(fkSchema);
/**
 * `ExpenseShare` schema for update operations excluding foreign keys and relations.
 */
exports.ExpenseShareUpdateScalarSchema = baseSchema.partial();
/**
 * `ExpenseShare` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.ExpenseShareUpdateSchema = exports.ExpenseShareUpdateScalarSchema.merge(fkSchema.partial());
