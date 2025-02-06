"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseShareCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), archived: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), userId: zod_1.z.literal(true).optional(), expenseId: zod_1.z.literal(true).optional(), amount: zod_1.z.literal(true).optional(), currency: zod_1.z.literal(true).optional(), locked: zod_1.z.literal(true).optional(), conversion: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
