"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const QueryMode_schema_1 = require("../enums/QueryMode.schema");
const NestedStringNullableFilter_schema_1 = require("./NestedStringNullableFilter.schema");
exports.StringNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.string().array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.string().array(),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.string().optional(), lte: zod_1.z.string().optional(), gt: zod_1.z.string().optional(), gte: zod_1.z.string().optional(), contains: zod_1.z.string().optional(), startsWith: zod_1.z.string().optional(), endsWith: zod_1.z.string().optional(), mode: zod_1.z.lazy(() => QueryMode_schema_1.QueryModeSchema).optional(), not: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
