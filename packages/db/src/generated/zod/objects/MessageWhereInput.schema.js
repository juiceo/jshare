"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumAuthorTypeFilter_schema_1 = require("./EnumAuthorTypeFilter.schema");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const ProfileNullableScalarRelationFilter_schema_1 = require("./ProfileNullableScalarRelationFilter.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const GroupScalarRelationFilter_schema_1 = require("./GroupScalarRelationFilter.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const MessageAttachmentListRelationFilter_schema_1 = require("./MessageAttachmentListRelationFilter.schema");
exports.MessageWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MessageWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MessageWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MessageWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolNullableFilter_schema_1.BoolNullableFilterObjectSchema),
        zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), key: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), text: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.union([zod_1.z.lazy(() => EnumAuthorTypeFilter_schema_1.EnumAuthorTypeFilterObjectSchema),
        zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema)]).optional(), authorId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), author: zod_1.z.union([zod_1.z.lazy(() => ProfileNullableScalarRelationFilter_schema_1.ProfileNullableScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), group: zod_1.z.union([zod_1.z.lazy(() => GroupScalarRelationFilter_schema_1.GroupScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema)]).optional(), attachments: zod_1.z.lazy(() => MessageAttachmentListRelationFilter_schema_1.MessageAttachmentListRelationFilterObjectSchema).optional()
}).strict();
