"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedBoolNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), not: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => exports.NestedBoolNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
