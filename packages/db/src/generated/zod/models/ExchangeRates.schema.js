"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesUpdateSchema = exports.ExchangeRatesUpdateScalarSchema = exports.ExchangeRatesCreateSchema = exports.ExchangeRatesCreateScalarSchema = exports.ExchangeRatesPrismaUpdateSchema = exports.ExchangeRatesPrismaCreateSchema = exports.ExchangeRatesSchema = exports.ExchangeRatesScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    baseCurrency: zod_1.z.string(),
    rates: zod_1.z.any(),
}).strict();
/**
 * `ExchangeRates` schema excluding foreign keys and relations.
 */
exports.ExchangeRatesScalarSchema = baseSchema;
/**
 * `ExchangeRates` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.ExchangeRatesSchema = exports.ExchangeRatesScalarSchema;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.ExchangeRatesPrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.ExchangeRatesPrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    baseCurrency: zod_1.z.string(),
    rates: zod_1.z.any()
}).partial().passthrough();
/**
 * `ExchangeRates` schema for create operations excluding foreign keys and relations.
 */
exports.ExchangeRatesCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});
/**
 * `ExchangeRates` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.ExchangeRatesCreateSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});
/**
 * `ExchangeRates` schema for update operations excluding foreign keys and relations.
 */
exports.ExchangeRatesUpdateScalarSchema = baseSchema.partial();
/**
 * `ExchangeRates` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.ExchangeRatesUpdateSchema = exports.ExchangeRatesUpdateScalarSchema;
