"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const ProfileCreateNestedOneWithoutGroupsInput_schema_1 = require("./ProfileCreateNestedOneWithoutGroupsInput.schema");
const GroupCreateNestedOneWithoutParticipantsInput_schema_1 = require("./GroupCreateNestedOneWithoutParticipantsInput.schema");
exports.GroupParticipantCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), role: zod_1.z.lazy(() => Role_schema_1.RoleSchema), user: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutGroupsInput_schema_1.ProfileCreateNestedOneWithoutGroupsInputObjectSchema), group: zod_1.z.lazy(() => GroupCreateNestedOneWithoutParticipantsInput_schema_1.GroupCreateNestedOneWithoutParticipantsInputObjectSchema)
}).strict();
