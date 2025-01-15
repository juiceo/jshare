"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const NestedEnumRoleWithAggregatesFilter_schema_1 = require("./NestedEnumRoleWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumRoleFilter_schema_1 = require("./NestedEnumRoleFilter.schema");
exports.EnumRoleWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(), in: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional(), notIn: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => NestedEnumRoleWithAggregatesFilter_schema_1.NestedEnumRoleWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterObjectSchema).optional()
}).strict();
