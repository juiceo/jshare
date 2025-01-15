"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const JsonNullValueFilter_schema_1 = require("../enums/JsonNullValueFilter.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([literalSchema, zod_1.z.array(jsonSchema.nullable()), zod_1.z.record(jsonSchema.nullable())]));
exports.JsonNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([jsonSchema,
        zod_1.z.lazy(() => JsonNullValueFilter_schema_1.JsonNullValueFilterSchema)]).optional(), path: zod_1.z.string().array().optional(), string_contains: zod_1.z.string().optional(), string_starts_with: zod_1.z.string().optional(), string_ends_with: zod_1.z.string().optional(), array_starts_with: zod_1.z.union([jsonSchema,
        zod_1.z.null()]).optional().nullable(), array_ends_with: zod_1.z.union([jsonSchema,
        zod_1.z.null()]).optional().nullable(), array_contains: zod_1.z.union([jsonSchema,
        zod_1.z.null()]).optional().nullable(), lt: jsonSchema.optional(), lte: jsonSchema.optional(), gt: jsonSchema.optional(), gte: jsonSchema.optional(), not: zod_1.z.union([jsonSchema,
        zod_1.z.lazy(() => JsonNullValueFilter_schema_1.JsonNullValueFilterSchema)]).optional()
}).strict();
