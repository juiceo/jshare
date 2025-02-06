"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateSchema = exports.ExpenseUpdateScalarSchema = exports.ExpenseCreateSchema = exports.ExpenseCreateScalarSchema = exports.ExpensePrismaUpdateSchema = exports.ExpensePrismaCreateSchema = exports.ExpenseSchema = exports.ExpenseScalarSchema = void 0;
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
    description: zod_1.z.string().nullish(),
    conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).nullish(),
}).strict();
const relationSchema = zod_1.z.object({
    owner: zod_1.z.record(zod_1.z.unknown()),
    payer: zod_1.z.record(zod_1.z.unknown()),
    group: zod_1.z.record(zod_1.z.unknown()),
    shares: zod_1.z.array(zod_1.z.unknown()).optional(),
    messageAttachments: zod_1.z.array(zod_1.z.unknown()).optional(),
});
const fkSchema = zod_1.z.object({
    ownerId: zod_1.z.string(),
    payerId: zod_1.z.string(),
    groupId: zod_1.z.string(),
});
/**
 * `Expense` schema excluding foreign keys and relations.
 */
exports.ExpenseScalarSchema = baseSchema;
/**
 * `Expense` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.ExpenseSchema = exports.ExpenseScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.ExpensePrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.ExpensePrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    amount: zod_1.z.union([zod_1.z.number(), zod_1.z.record(zod_1.z.unknown())]),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    description: zod_1.z.string().nullish(),
    conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).nullish()
}).partial().passthrough();
/**
 * `Expense` schema for create operations excluding foreign keys and relations.
 */
exports.ExpenseCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});
/**
 * `Expense` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.ExpenseCreateSchema = exports.ExpenseCreateScalarSchema.merge(fkSchema);
/**
 * `Expense` schema for update operations excluding foreign keys and relations.
 */
exports.ExpenseUpdateScalarSchema = baseSchema.partial();
/**
 * `Expense` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.ExpenseUpdateSchema = exports.ExpenseUpdateScalarSchema.merge(fkSchema.partial());
