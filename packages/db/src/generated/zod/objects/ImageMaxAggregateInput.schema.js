"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ImageMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), path: zod_1.z.literal(true).optional().optional(), bucket: zod_1.z.literal(true).optional().optional(), uploadedById: zod_1.z.literal(true).optional().optional(), blurhash: zod_1.z.literal(true).optional().optional()
}).strict();
