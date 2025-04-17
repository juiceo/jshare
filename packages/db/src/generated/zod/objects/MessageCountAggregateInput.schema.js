"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), key: zod_1.z.literal(true).optional().optional(), text: zod_1.z.literal(true).optional().optional(), authorType: zod_1.z.literal(true).optional().optional(), authorId: zod_1.z.literal(true).optional().optional(), groupId: zod_1.z.literal(true).optional().optional(), _all: zod_1.z.literal(true).optional().optional()
}).strict();
