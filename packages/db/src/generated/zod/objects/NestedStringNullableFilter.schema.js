"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedStringNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.string().array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.string().array(),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.string().optional().optional(), lte: zod_1.z.string().optional().optional(), gt: zod_1.z.string().optional().optional(), gte: zod_1.z.string().optional().optional(), contains: zod_1.z.string().optional().optional(), startsWith: zod_1.z.string().optional().optional(), endsWith: zod_1.z.string().optional().optional(), not: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => exports.NestedStringNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
