"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScalarWhereWithAggregatesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const BoolNullableWithAggregatesFilter_schema_1 = require("./BoolNullableWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const EnumCurrencyCodeWithAggregatesFilter_schema_1 = require("./EnumCurrencyCodeWithAggregatesFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const JsonNullableWithAggregatesFilter_schema_1 = require("./JsonNullableWithAggregatesFilter.schema");
exports.PaymentScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PaymentScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.PaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.PaymentScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PaymentScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.PaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolNullableWithAggregatesFilter_schema_1.BoolNullableWithAggregatesFilterObjectSchema),
        zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), groupId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), amount: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeWithAggregatesFilter_schema_1.EnumCurrencyCodeWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), conversion: zod_1.z.lazy(() => JsonNullableWithAggregatesFilter_schema_1.JsonNullableWithAggregatesFilterObjectSchema).optional(), recipientId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), payerId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional()
}).strict();
