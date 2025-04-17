"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedDateTimeNullableFilter_schema_1 = require("./NestedDateTimeNullableFilter.schema");
exports.DateTimeNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.union([zod_1.z.date().array(), zod_1.z.string().datetime().array().optional()]),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.union([zod_1.z.date().array(), zod_1.z.string().datetime().array().optional()]),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), lte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), gt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), gte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), not: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
