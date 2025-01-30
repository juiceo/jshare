"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedDateTimeNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.union([zod_1.z.date().array(), zod_1.z.string().datetime().array().optional()]),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.union([zod_1.z.date().array(), zod_1.z.string().datetime().array().optional()]),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), lte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), gt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), gte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), not: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
