"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ProfileMaxAggregateInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.literal(true).optional(), email: zod_1.z.literal(true).optional(), firstName: zod_1.z.literal(true).optional(), lastName: zod_1.z.literal(true).optional(), lastActivity: zod_1.z.literal(true).optional(), currency: zod_1.z.literal(true).optional(), avatarId: zod_1.z.literal(true).optional(), temporary: zod_1.z.literal(true).optional(), termsAcceptedAt: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional()
}).strict();
