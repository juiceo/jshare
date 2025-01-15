"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageAttachmentCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), messageId: zod_1.z.literal(true).optional(), type: zod_1.z.literal(true).optional(), expenseId: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
