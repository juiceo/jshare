"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantMinAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupParticipantMinAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), userId: zod_1.z.literal(true).optional(), groupId: zod_1.z.literal(true).optional(), role: zod_1.z.literal(true).optional()
}).strict();
