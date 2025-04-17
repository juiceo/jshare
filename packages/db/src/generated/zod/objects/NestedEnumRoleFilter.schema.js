"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
exports.NestedEnumRoleFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => Role_schema_1.RoleSchema).optional().optional(), in: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional().optional(), notIn: zod_1.z.lazy(() => Role_schema_1.RoleSchema).array().optional().optional(), not: zod_1.z.union([zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => exports.NestedEnumRoleFilterObjectSchema)]).optional()
}).strict();
