"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedStringFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().optional(), in: zod_1.z.string().array().optional().optional(), notIn: zod_1.z.string().array().optional().optional(), lt: zod_1.z.string().optional().optional(), lte: zod_1.z.string().optional().optional(), gt: zod_1.z.string().optional().optional(), gte: zod_1.z.string().optional().optional(), contains: zod_1.z.string().optional().optional(), startsWith: zod_1.z.string().optional().optional(), endsWith: zod_1.z.string().optional().optional(), not: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => exports.NestedStringFilterObjectSchema)]).optional()
}).strict();
