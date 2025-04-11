"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ImageCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), archived: zod_1.z.literal(true).optional(), archivedAt: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), path: zod_1.z.literal(true).optional(), bucket: zod_1.z.literal(true).optional(), uploadedById: zod_1.z.literal(true).optional(), blurhash: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
