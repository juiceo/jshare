"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageAttachmentCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), messageId: zod_1.z.literal(true).optional().optional(), type: zod_1.z.literal(true).optional().optional(), expenseId: zod_1.z.literal(true).optional().optional(), _all: zod_1.z.literal(true).optional().optional()
}).strict();
