"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentScalarWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const EnumMessageAttachmentTypeFilter_schema_1 = require("./EnumMessageAttachmentTypeFilter.schema");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
exports.MessageAttachmentScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MessageAttachmentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageAttachmentScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MessageAttachmentScalarWhereInputObjectSchema).array().optional().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MessageAttachmentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageAttachmentScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), messageId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), type: zod_1.z.union([zod_1.z.lazy(() => EnumMessageAttachmentTypeFilter_schema_1.EnumMessageAttachmentTypeFilterObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema)]).optional(), expenseId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable()
}).strict();
