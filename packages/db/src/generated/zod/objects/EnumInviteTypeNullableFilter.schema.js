"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumInviteTypeNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const InviteType_schema_1 = require("../enums/InviteType.schema");
const NestedEnumInviteTypeNullableFilter_schema_1 = require("./NestedEnumInviteTypeNullableFilter.schema");
exports.EnumInviteTypeNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema).array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema).array(),
        zod_1.z.null()]).optional().nullable(), not: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.lazy(() => NestedEnumInviteTypeNullableFilter_schema_1.NestedEnumInviteTypeNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
