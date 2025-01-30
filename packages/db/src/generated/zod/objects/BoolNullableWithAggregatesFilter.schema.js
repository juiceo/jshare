"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedBoolNullableWithAggregatesFilter_schema_1 = require("./NestedBoolNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedBoolNullableFilter_schema_1 = require("./NestedBoolNullableFilter.schema");
exports.BoolNullableWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), not: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => NestedBoolNullableWithAggregatesFilter_schema_1.NestedBoolNullableWithAggregatesFilterObjectSchema),
        zod_1.z.null()]).optional().nullable(), _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedBoolNullableFilter_schema_1.NestedBoolNullableFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedBoolNullableFilter_schema_1.NestedBoolNullableFilterObjectSchema).optional()
}).strict();
