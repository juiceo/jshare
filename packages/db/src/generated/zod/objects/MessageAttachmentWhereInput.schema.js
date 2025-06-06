"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const EnumMessageAttachmentTypeFilter_schema_1 = require("./EnumMessageAttachmentTypeFilter.schema");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const MessageScalarRelationFilter_schema_1 = require("./MessageScalarRelationFilter.schema");
const MessageWhereInput_schema_1 = require("./MessageWhereInput.schema");
const ExpenseNullableScalarRelationFilter_schema_1 = require("./ExpenseNullableScalarRelationFilter.schema");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
exports.MessageAttachmentWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.MessageAttachmentWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageAttachmentWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.MessageAttachmentWhereInputObjectSchema).array().optional().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.MessageAttachmentWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.MessageAttachmentWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), messageId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), type: zod_1.z.union([zod_1.z.lazy(() => EnumMessageAttachmentTypeFilter_schema_1.EnumMessageAttachmentTypeFilterObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema)]).optional(), expenseId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), message: zod_1.z.union([zod_1.z.lazy(() => MessageScalarRelationFilter_schema_1.MessageScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema)]).optional(), expense: zod_1.z.union([zod_1.z.lazy(() => ExpenseNullableScalarRelationFilter_schema_1.ExpenseNullableScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
