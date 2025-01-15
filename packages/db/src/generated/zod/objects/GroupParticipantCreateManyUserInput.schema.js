"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateManyUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
exports.GroupParticipantCreateManyUserInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), groupId: zod_1.z.string(), role: zod_1.z.lazy(() => Role_schema_1.RoleSchema)
}).strict();
