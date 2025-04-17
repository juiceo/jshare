"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ProfileCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), email: zod_1.z.literal(true).optional().optional(), firstName: zod_1.z.literal(true).optional().optional(), lastName: zod_1.z.literal(true).optional().optional(), lastActivity: zod_1.z.literal(true).optional().optional(), currency: zod_1.z.literal(true).optional().optional(), avatarId: zod_1.z.literal(true).optional().optional(), temporary: zod_1.z.literal(true).optional().optional(), termsAcceptedAt: zod_1.z.literal(true).optional().optional(), showInSearch: zod_1.z.literal(true).optional().optional(), _all: zod_1.z.literal(true).optional().optional()
}).strict();
