"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageArgs_schema_1 = require("./MessageArgs.schema");
const ExpenseArgs_schema_1 = require("./ExpenseArgs.schema");
exports.MessageAttachmentSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.boolean().optional().optional(), createdAt: zod_1.z.boolean().optional().optional(), updatedAt: zod_1.z.boolean().optional().optional(), messageId: zod_1.z.boolean().optional().optional(), message: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageArgs_schema_1.MessageArgsObjectSchema)]).optional(), type: zod_1.z.boolean().optional().optional(), expenseId: zod_1.z.boolean().optional().optional(), expense: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseArgs_schema_1.ExpenseArgsObjectSchema)]).optional()
}).strict();
