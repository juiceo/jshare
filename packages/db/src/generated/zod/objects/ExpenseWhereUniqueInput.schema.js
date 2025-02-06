"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseWhereUniqueInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const EnumCurrencyCodeFilter_schema_1 = require("./EnumCurrencyCodeFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const ProfileScalarRelationFilter_schema_1 = require("./ProfileScalarRelationFilter.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const GroupScalarRelationFilter_schema_1 = require("./GroupScalarRelationFilter.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const ExpenseShareListRelationFilter_schema_1 = require("./ExpenseShareListRelationFilter.schema");
const MessageAttachmentListRelationFilter_schema_1 = require("./MessageAttachmentListRelationFilter.schema");
exports.ExpenseWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).array()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolNullableFilter_schema_1.BoolNullableFilterObjectSchema),
        zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), ownerId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), payerId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), amount: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeFilter_schema_1.EnumCurrencyCodeFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), description: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), conversion: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(), owner: zod_1.z.union([zod_1.z.lazy(() => ProfileScalarRelationFilter_schema_1.ProfileScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), payer: zod_1.z.union([zod_1.z.lazy(() => ProfileScalarRelationFilter_schema_1.ProfileScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), group: zod_1.z.union([zod_1.z.lazy(() => GroupScalarRelationFilter_schema_1.GroupScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema)]).optional(), shares: zod_1.z.lazy(() => ExpenseShareListRelationFilter_schema_1.ExpenseShareListRelationFilterObjectSchema).optional(), messageAttachments: zod_1.z.lazy(() => MessageAttachmentListRelationFilter_schema_1.MessageAttachmentListRelationFilterObjectSchema).optional()
}).strict();
