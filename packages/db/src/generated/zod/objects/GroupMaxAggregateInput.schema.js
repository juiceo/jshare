"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMaxAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), createdAt: zod_1.z.literal(true).optional(), updatedAt: zod_1.z.literal(true).optional(), name: zod_1.z.literal(true).optional(), currency: zod_1.z.literal(true).optional(), coverImageId: zod_1.z.literal(true).optional(), inviteCode: zod_1.z.literal(true).optional()
}).strict();
