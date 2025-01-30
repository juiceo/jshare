"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupWhereUniqueInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const EnumCurrencyCodeFilter_schema_1 = require("./EnumCurrencyCodeFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const GroupParticipantListRelationFilter_schema_1 = require("./GroupParticipantListRelationFilter.schema");
const ImageNullableScalarRelationFilter_schema_1 = require("./ImageNullableScalarRelationFilter.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const MessageListRelationFilter_schema_1 = require("./MessageListRelationFilter.schema");
const ExpenseListRelationFilter_schema_1 = require("./ExpenseListRelationFilter.schema");
const PaymentListRelationFilter_schema_1 = require("./PaymentListRelationFilter.schema");
exports.GroupWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), inviteCode: zod_1.z.string().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).array()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeFilter_schema_1.EnumCurrencyCodeFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), coverImageId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), lastActivity: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), participants: zod_1.z.lazy(() => GroupParticipantListRelationFilter_schema_1.GroupParticipantListRelationFilterObjectSchema).optional(), coverImage: zod_1.z.union([zod_1.z.lazy(() => ImageNullableScalarRelationFilter_schema_1.ImageNullableScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), messages: zod_1.z.lazy(() => MessageListRelationFilter_schema_1.MessageListRelationFilterObjectSchema).optional(), expenses: zod_1.z.lazy(() => ExpenseListRelationFilter_schema_1.ExpenseListRelationFilterObjectSchema).optional(), payments: zod_1.z.lazy(() => PaymentListRelationFilter_schema_1.PaymentListRelationFilterObjectSchema).optional()
}).strict();
