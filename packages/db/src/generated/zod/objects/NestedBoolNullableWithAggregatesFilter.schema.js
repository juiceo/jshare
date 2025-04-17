"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedBoolNullableFilter_schema_1 = require("./NestedBoolNullableFilter.schema");
exports.NestedBoolNullableWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), not: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => exports.NestedBoolNullableWithAggregatesFilterObjectSchema),
        zod_1.z.null()]).optional().nullable(), _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => NestedBoolNullableFilter_schema_1.NestedBoolNullableFilterObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => NestedBoolNullableFilter_schema_1.NestedBoolNullableFilterObjectSchema).optional().optional()
}).strict();
