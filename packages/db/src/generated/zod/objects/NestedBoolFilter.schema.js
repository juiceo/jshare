"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedBoolFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional().optional(), not: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => exports.NestedBoolFilterObjectSchema)]).optional()
}).strict();
