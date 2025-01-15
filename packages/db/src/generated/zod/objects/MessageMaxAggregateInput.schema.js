"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), key: zod_1.z.literal(true).optional(), text: zod_1.z.literal(true).optional(), authorType: zod_1.z.literal(true).optional(), authorId: zod_1.z.literal(true).optional(), groupId: zod_1.z.literal(true).optional()
}).strict();
