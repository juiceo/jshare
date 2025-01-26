"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const InviteType_schema_1 = require("../enums/InviteType.schema");
const ProfileCreateNestedOneWithoutGroupsInput_schema_1 = require("./ProfileCreateNestedOneWithoutGroupsInput.schema");
const GroupCreateNestedOneWithoutParticipantsInput_schema_1 = require("./GroupCreateNestedOneWithoutParticipantsInput.schema");
exports.GroupParticipantCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), role: zod_1.z.lazy(() => Role_schema_1.RoleSchema), invitedById: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteType: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable(), user: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutGroupsInput_schema_1.ProfileCreateNestedOneWithoutGroupsInputObjectSchema), group: zod_1.z.lazy(() => GroupCreateNestedOneWithoutParticipantsInput_schema_1.GroupCreateNestedOneWithoutParticipantsInputObjectSchema)
}).strict();
