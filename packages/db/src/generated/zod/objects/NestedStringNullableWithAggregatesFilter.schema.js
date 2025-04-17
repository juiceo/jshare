"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedStringNullableFilter_schema_1 = require("./NestedStringNullableFilter.schema");
exports.NestedStringNullableWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.string().array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.string().array(),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.string().optional().optional(), lte: zod_1.z.string().optional().optional(), gt: zod_1.z.string().optional().optional(), gte: zod_1.z.string().optional().optional(), contains: zod_1.z.string().optional().optional(), startsWith: zod_1.z.string().optional().optional(), endsWith: zod_1.z.string().optional().optional(), not: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.null()]).optional().nullable(), _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema).optional().optional()
}).strict();
