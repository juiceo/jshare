"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const NestedBoolFilter_schema_1 = require("./NestedBoolFilter.schema");
exports.BoolFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional().optional(), not: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => NestedBoolFilter_schema_1.NestedBoolFilterObjectSchema)]).optional()
}).strict();
