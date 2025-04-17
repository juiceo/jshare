"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullableFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const JsonNullValueFilter_schema_1 = require("../enums/JsonNullValueFilter.schema");
const QueryMode_schema_1 = require("../enums/QueryMode.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([literalSchema, zod_1.z.array(jsonSchema.nullable()), zod_1.z.record(jsonSchema.nullable())]));
exports.JsonNullableFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.union([jsonSchema,
        zod_1.z.lazy(() => JsonNullValueFilter_schema_1.JsonNullValueFilterSchema)]).optional(), path: zod_1.z.string().array().optional().optional(), mode: zod_1.z.lazy(() => QueryMode_schema_1.QueryModeSchema).optional().optional(), string_contains: zod_1.z.string().optional().optional(), string_starts_with: zod_1.z.string().optional().optional(), string_ends_with: zod_1.z.string().optional().optional(), array_starts_with: zod_1.z.union([jsonSchema,
        zod_1.z.null()]).optional().nullable(), array_ends_with: zod_1.z.union([jsonSchema,
        zod_1.z.null()]).optional().nullable(), array_contains: zod_1.z.union([jsonSchema,
        zod_1.z.null()]).optional().nullable(), lt: jsonSchema.optional().optional(), lte: jsonSchema.optional().optional(), gt: jsonSchema.optional().optional(), gte: jsonSchema.optional().optional(), not: zod_1.z.union([jsonSchema,
        zod_1.z.lazy(() => JsonNullValueFilter_schema_1.JsonNullValueFilterSchema)]).optional()
}).strict();
