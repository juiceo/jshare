"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScalarWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const EnumCurrencyCodeFilter_schema_1 = require("./EnumCurrencyCodeFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
exports.PaymentScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PaymentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PaymentScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.PaymentScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PaymentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PaymentScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), amount: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeFilter_schema_1.EnumCurrencyCodeFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), conversion: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(), recipientId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), payerId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional()
}).strict();
