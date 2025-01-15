"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarWhereWithAggregatesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const EnumAuthorTypeWithAggregatesFilter_schema_1 = require("./EnumAuthorTypeWithAggregatesFilter.schema");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
exports.MessageScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MessageScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MessageScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MessageScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), key: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), text: zod_1.z.union([zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.union([zod_1.z.lazy(() => EnumAuthorTypeWithAggregatesFilter_schema_1.EnumAuthorTypeWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema)]).optional(), authorId: zod_1.z.union([zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional()
}).strict();
