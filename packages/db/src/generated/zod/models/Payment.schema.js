"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateSchema = exports.PaymentUpdateScalarSchema = exports.PaymentCreateSchema = exports.PaymentCreateScalarSchema = exports.PaymentPrismaUpdateSchema = exports.PaymentPrismaCreateSchema = exports.PaymentSchema = exports.PaymentScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const CurrencyConversion_schema_1 = require("./CurrencyConversion.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false),
    archivedAt: zod_1.z.coerce.date().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    amount: zod_1.z.number(),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).nullish(),
}).strict();
const relationSchema = zod_1.z.object({
    group: zod_1.z.record(zod_1.z.unknown()),
    recipient: zod_1.z.record(zod_1.z.unknown()),
    payer: zod_1.z.record(zod_1.z.unknown()),
});
const fkSchema = zod_1.z.object({
    groupId: zod_1.z.string(),
    recipientId: zod_1.z.string(),
    payerId: zod_1.z.string(),
});
/**
 * `Payment` schema excluding foreign keys and relations.
 */
exports.PaymentScalarSchema = baseSchema;
/**
 * `Payment` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.PaymentSchema = exports.PaymentScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.PaymentPrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.PaymentPrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().default(false),
    archivedAt: zod_1.z.coerce.date().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    amount: zod_1.z.union([zod_1.z.number(), zod_1.z.record(zod_1.z.unknown())]),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).nullish()
}).partial().passthrough();
/**
 * `Payment` schema for create operations excluding foreign keys and relations.
 */
exports.PaymentCreateScalarSchema = baseSchema.partial({
    id: true, archived: true, createdAt: true, updatedAt: true
});
/**
 * `Payment` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.PaymentCreateSchema = exports.PaymentCreateScalarSchema.merge(fkSchema);
/**
 * `Payment` schema for update operations excluding foreign keys and relations.
 */
exports.PaymentUpdateScalarSchema = baseSchema.partial();
/**
 * `Payment` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.PaymentUpdateSchema = exports.PaymentUpdateScalarSchema.merge(fkSchema.partial());
