"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), ownerId: zod_1.z.literal(true).optional(), payerId: zod_1.z.literal(true).optional(), groupId: zod_1.z.literal(true).optional(), amount: zod_1.z.literal(true).optional(), currency: zod_1.z.literal(true).optional(), description: zod_1.z.literal(true).optional()
}).strict();
