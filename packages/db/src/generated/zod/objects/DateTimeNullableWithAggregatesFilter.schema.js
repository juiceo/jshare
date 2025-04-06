"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedDateTimeNullableWithAggregatesFilter_schema_1 = require("./NestedDateTimeNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedDateTimeNullableFilter_schema_1 = require("./NestedDateTimeNullableFilter.schema");
exports.DateTimeNullableWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.union([zod_1.z.date().array(), zod_1.z.string().datetime().array().optional()]),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.union([zod_1.z.date().array(), zod_1.z.string().datetime().array().optional()]),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), lte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), gt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), gte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), not: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NestedDateTimeNullableWithAggregatesFilter_schema_1.NestedDateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.null()]).optional().nullable(), _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterObjectSchema).optional()
}).strict();
