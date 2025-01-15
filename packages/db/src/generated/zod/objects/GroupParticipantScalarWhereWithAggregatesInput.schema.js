"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const EnumRoleWithAggregatesFilter_schema_1 = require("./EnumRoleWithAggregatesFilter.schema");
const Role_schema_1 = require("../enums/Role.schema");
exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.GroupParticipantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), role: zod_1.z.union([zod_1.z.lazy(() => EnumRoleWithAggregatesFilter_schema_1.EnumRoleWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => Role_schema_1.RoleSchema)]).optional()
}).strict();
