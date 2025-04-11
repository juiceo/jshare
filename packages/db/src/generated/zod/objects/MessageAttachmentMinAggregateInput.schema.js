"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentMinAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageAttachmentMinAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), archived: zod_1.z.literal(true).optional(), archivedAt: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), messageId: zod_1.z.literal(true).optional(), type: zod_1.z.literal(true).optional(), expenseId: zod_1.z.literal(true).optional()
}).strict();
