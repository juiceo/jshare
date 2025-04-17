"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExchangeRatesSelect_schema_1 = require("./ExchangeRatesSelect.schema");
exports.ExchangeRatesArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema).optional().optional()
}).strict();
