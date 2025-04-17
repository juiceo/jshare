"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumRoleFilter_schema_1 = require("./NestedEnumRoleFilter.schema");
exports.NestedEnumRoleWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional().optional(), in: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional().optional(), notIn: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional().optional(), not: zod_1.z.union([zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => exports.NestedEnumRoleWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterObjectSchema).optional().optional()
}).strict();
