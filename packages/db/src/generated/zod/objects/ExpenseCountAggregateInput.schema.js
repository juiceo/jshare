"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), ownerId: zod_1.z.literal(true).optional(), payerId: zod_1.z.literal(true).optional(), groupId: zod_1.z.literal(true).optional(), amount: zod_1.z.literal(true).optional(), currency: zod_1.z.literal(true).optional(), description: zod_1.z.literal(true).optional(), conversion: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
