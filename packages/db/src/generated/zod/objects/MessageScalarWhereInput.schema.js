"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumAuthorTypeFilter_schema_1 = require("./EnumAuthorTypeFilter.schema");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
exports.MessageScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MessageScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MessageScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MessageScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), key: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), text: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.union([zod_1.z.lazy(() => EnumAuthorTypeFilter_schema_1.EnumAuthorTypeFilterObjectSchema),
        zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema)]).optional(), authorId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional()
}).strict();
