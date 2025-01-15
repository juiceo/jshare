"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const NestedEnumRoleFilter_schema_1 = require("./NestedEnumRoleFilter.schema");
exports.EnumRoleFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional(), in: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional(), notIn: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterObjectSchema)]).optional()
}).strict();
