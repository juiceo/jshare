"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const EnumCurrencyCodeFilter_schema_1 = require("./EnumCurrencyCodeFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const GroupScalarRelationFilter_schema_1 = require("./GroupScalarRelationFilter.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const ProfileScalarRelationFilter_schema_1 = require("./ProfileScalarRelationFilter.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.PaymentWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PaymentWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PaymentWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.PaymentWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PaymentWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PaymentWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), amount: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeFilter_schema_1.EnumCurrencyCodeFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), conversion: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(), recipientId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), payerId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), group: zod_1.z.union([zod_1.z.lazy(() => GroupScalarRelationFilter_schema_1.GroupScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema)]).optional(), recipient: zod_1.z.union([zod_1.z.lazy(() => ProfileScalarRelationFilter_schema_1.ProfileScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), payer: zod_1.z.union([zod_1.z.lazy(() => ProfileScalarRelationFilter_schema_1.ProfileScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional()
}).strict();
