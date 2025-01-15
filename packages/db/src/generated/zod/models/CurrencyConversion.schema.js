"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const baseSchema = zod_1.z.object({
    sourceCurrency: CurrencyCode_schema_1.CurrencyCodeSchema,
    sourceAmount: zod_1.z.number(),
    currency: CurrencyCode_schema_1.CurrencyCodeSchema,
    amount: zod_1.z.number(),
    exchangeRate: zod_1.z.number(),
    exchangeRatesId: zod_1.z.string(),
}).strict();
exports.CurrencyConversionSchema = baseSchema;
