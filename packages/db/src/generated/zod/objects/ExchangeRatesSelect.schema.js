"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExchangeRatesSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.boolean().optional().optional(), createdAt: zod_1.z.boolean().optional().optional(), updatedAt: zod_1.z.boolean().optional().optional(), baseCurrency: zod_1.z.boolean().optional().optional(), rates: zod_1.z.boolean().optional().optional()
}).strict();
