"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedFloatFilter_schema_1 = require("./NestedFloatFilter.schema");
exports.NestedIntWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(), in: zod_1.z.number().array().optional(), notIn: zod_1.z.number().array().optional(), lt: zod_1.z.number().optional(), lte: zod_1.z.number().optional(), gt: zod_1.z.number().optional(), gte: zod_1.z.number().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _avg: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(), _sum: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional()
}).strict();
