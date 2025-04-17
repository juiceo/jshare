"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedFloatFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().optional(), in: zod_1.z.number().array().optional().optional(), notIn: zod_1.z.number().array().optional().optional(), lt: zod_1.z.number().optional().optional(), lte: zod_1.z.number().optional().optional(), gt: zod_1.z.number().optional().optional(), gte: zod_1.z.number().optional().optional(), not: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedFloatFilterObjectSchema)]).optional()
}).strict();
