"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseShareMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), userId: zod_1.z.literal(true).optional().optional(), expenseId: zod_1.z.literal(true).optional().optional(), amount: zod_1.z.literal(true).optional().optional(), currency: zod_1.z.literal(true).optional().optional(), locked: zod_1.z.literal(true).optional().optional()
}).strict();
