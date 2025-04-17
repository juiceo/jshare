"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), name: zod_1.z.literal(true).optional().optional(), currency: zod_1.z.literal(true).optional().optional(), coverImageId: zod_1.z.literal(true).optional().optional(), inviteCode: zod_1.z.literal(true).optional().optional(), lastActivity: zod_1.z.literal(true).optional().optional()
}).strict();
