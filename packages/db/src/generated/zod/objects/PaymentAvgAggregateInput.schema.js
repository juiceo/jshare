"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAvgAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.PaymentAvgAggregateInputObjectSchema = zod_1.z.object({
    amount: zod_1.z.literal(true).optional().optional()
}).strict();
