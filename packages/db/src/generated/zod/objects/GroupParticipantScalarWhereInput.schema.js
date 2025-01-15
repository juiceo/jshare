"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantScalarWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const EnumRoleFilter_schema_1 = require("./EnumRoleFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
exports.GroupParticipantScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleFilter_schema_1.EnumRoleFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema)]).optional()
}).strict();
