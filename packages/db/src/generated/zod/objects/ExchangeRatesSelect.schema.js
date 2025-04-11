"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExchangeRatesSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), archived: zod_1.z.boolean().optional(), archivedAt: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), baseCurrency: zod_1.z.boolean().optional(), rates: zod_1.z.boolean().optional()
}).strict();
