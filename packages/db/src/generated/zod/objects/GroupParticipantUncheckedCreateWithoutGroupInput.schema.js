"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const InviteType_schema_1 = require("../enums/InviteType.schema");
exports.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), userId: zod_1.z.string(), role: zod_1.z.lazy(() => Role_schema_1.RoleSchema), invitedById: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteType: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
