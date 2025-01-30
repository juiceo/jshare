"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedBoolNullableFilter_schema_1 = require("./NestedBoolNullableFilter.schema");
exports.BoolNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), not: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => NestedBoolNullableFilter_schema_1.NestedBoolNullableFilterObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
