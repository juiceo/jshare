"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const EnumRoleFilter_schema_1 = require("./EnumRoleFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumInviteTypeNullableFilter_schema_1 = require("./EnumInviteTypeNullableFilter.schema");
const InviteType_schema_1 = require("../enums/InviteType.schema");
const ProfileScalarRelationFilter_schema_1 = require("./ProfileScalarRelationFilter.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const GroupScalarRelationFilter_schema_1 = require("./GroupScalarRelationFilter.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupParticipantWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.GroupParticipantWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleFilter_schema_1.EnumRoleFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema)]).optional(), invitedById: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteType: zod_1.z.union([zod_1.z.lazy(() => EnumInviteTypeNullableFilter_schema_1.EnumInviteTypeNullableFilterObjectSchema),
        zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable(), user: zod_1.z.union([zod_1.z.lazy(() => ProfileScalarRelationFilter_schema_1.ProfileScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), group: zod_1.z.union([zod_1.z.lazy(() => GroupScalarRelationFilter_schema_1.GroupScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema)]).optional()
}).strict();
