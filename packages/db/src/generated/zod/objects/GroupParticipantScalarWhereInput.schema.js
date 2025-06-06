"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantScalarWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const EnumRoleFilter_schema_1 = require("./EnumRoleFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumInviteTypeNullableFilter_schema_1 = require("./EnumInviteTypeNullableFilter.schema");
const InviteType_schema_1 = require("../enums/InviteType.schema");
exports.GroupParticipantScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema).array().optional().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleFilter_schema_1.EnumRoleFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema)]).optional(), invitedById: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteType: zod_1.z.union([zod_1.z.lazy(() => EnumInviteTypeNullableFilter_schema_1.EnumInviteTypeNullableFilterObjectSchema),
        zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
