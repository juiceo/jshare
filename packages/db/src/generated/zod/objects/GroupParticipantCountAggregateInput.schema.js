"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCountAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupParticipantCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional().optional(), archived: zod_1.z.literal(true).optional().optional(), archivedAt: zod_1.z.literal(true).optional().optional(), createdAt: zod_1.z.literal(true).optional().optional(), updatedAt: zod_1.z.literal(true).optional().optional(), userId: zod_1.z.literal(true).optional().optional(), groupId: zod_1.z.literal(true).optional().optional(), role: zod_1.z.literal(true).optional().optional(), invitedById: zod_1.z.literal(true).optional().optional(), inviteType: zod_1.z.literal(true).optional().optional(), _all: zod_1.z.literal(true).optional().optional()
}).strict();
