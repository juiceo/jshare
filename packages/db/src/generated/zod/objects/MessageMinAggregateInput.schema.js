"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMinAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageMinAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), archived: zod_1.z.literal(true).optional(), archivedAt: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), key: zod_1.z.literal(true).optional(), text: zod_1.z.literal(true).optional(), authorType: zod_1.z.literal(true).optional(), authorId: zod_1.z.literal(true).optional(), groupId: zod_1.z.literal(true).optional()
}).strict();
