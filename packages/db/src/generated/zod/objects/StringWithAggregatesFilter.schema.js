"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const QueryMode_schema_1 = require("../enums/QueryMode.schema");
const NestedStringWithAggregatesFilter_schema_1 = require("./NestedStringWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedStringFilter_schema_1 = require("./NestedStringFilter.schema");
exports.StringWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(), in: zod_1.z.string().array().optional(), notIn: zod_1.z.string().array().optional(), lt: zod_1.z.string().optional(), lte: zod_1.z.string().optional(), gt: zod_1.z.string().optional(), gte: zod_1.z.string().optional(), contains: zod_1.z.string().optional(), startsWith: zod_1.z.string().optional(), endsWith: zod_1.z.string().optional(), mode: zod_1.z.lazy(() => QueryMode_schema_1.QueryModeSchema).optional(), not: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NestedStringWithAggregatesFilter_schema_1.NestedStringWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedStringFilter_schema_1.NestedStringFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedStringFilter_schema_1.NestedStringFilterObjectSchema).optional()
}).strict();
