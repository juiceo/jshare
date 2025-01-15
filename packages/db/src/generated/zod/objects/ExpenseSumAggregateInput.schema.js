"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseSumAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseSumAggregateInputObjectSchema = zod_1.z.object({
    amount: zod_1.z.literal(true).optional()
}).strict();
