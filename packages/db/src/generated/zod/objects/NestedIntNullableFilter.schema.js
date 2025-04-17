"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedIntNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), in: zod_1.z.union([zod_1.z.number().array(),
        zod_1.z.null()]).optional().nullable(), notIn: zod_1.z.union([zod_1.z.number().array(),
        zod_1.z.null()]).optional().nullable(), lt: zod_1.z.number().optional().optional(), lte: zod_1.z.number().optional().optional(), gt: zod_1.z.number().optional().optional(), gte: zod_1.z.number().optional().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedIntNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
