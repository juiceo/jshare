"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NestedDateTimeFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), in: zod_1.z.union([zod_1.z.date().array().optional(), zod_1.z.string().datetime().array().optional()]).optional(), notIn: zod_1.z.union([zod_1.z.date().array().optional(), zod_1.z.string().datetime().array().optional()]).optional(), lt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), lte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), gt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), gte: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), not: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => exports.NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
