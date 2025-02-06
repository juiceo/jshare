"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const BoolNullableWithAggregatesFilter_schema_1 = require("./BoolNullableWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const EnumRoleWithAggregatesFilter_schema_1 = require("./EnumRoleWithAggregatesFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const EnumInviteTypeNullableWithAggregatesFilter_schema_1 = require("./EnumInviteTypeNullableWithAggregatesFilter.schema");
const InviteType_schema_1 = require("../enums/InviteType.schema");
exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolNullableWithAggregatesFilter_schema_1.BoolNullableWithAggregatesFilterObjectSchema),
        zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleWithAggregatesFilter_schema_1.EnumRoleWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema)]).optional(), invitedById: zod_1.z.union([zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteType: zod_1.z.union([zod_1.z.lazy(() => EnumInviteTypeNullableWithAggregatesFilter_schema_1.EnumInviteTypeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
