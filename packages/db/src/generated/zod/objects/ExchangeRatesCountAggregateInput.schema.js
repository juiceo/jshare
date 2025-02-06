"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExchangeRatesCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), archived: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), baseCurrency: zod_1.z.literal(true).optional(), rates: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
