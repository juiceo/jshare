"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageScalarWhereWithAggregatesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const BoolWithAggregatesFilter_schema_1 = require("./BoolWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
exports.ImageScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ImageScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ImageScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ImageScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), path: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), bucket: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), uploadedById: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), blurhash: zod_1.z.union([zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable()
}).strict();
