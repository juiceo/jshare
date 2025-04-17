"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
const ExpenseArgs_schema_1 = require("./ExpenseArgs.schema");
exports.ExpenseShareSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.boolean().optional().optional(), createdAt: zod_1.z.boolean().optional().optional(), updatedAt: zod_1.z.boolean().optional().optional(), userId: zod_1.z.boolean().optional().optional(), user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), expenseId: zod_1.z.boolean().optional().optional(), expense: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseArgs_schema_1.ExpenseArgsObjectSchema)]).optional(), amount: zod_1.z.boolean().optional().optional(), currency: zod_1.z.boolean().optional().optional(), locked: zod_1.z.boolean().optional().optional(), conversion: zod_1.z.boolean().optional().optional()
}).strict();
