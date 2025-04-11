"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const BoolWithAggregatesFilter_schema_1 = require("./BoolWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const EnumCurrencyCodeWithAggregatesFilter_schema_1 = require("./EnumCurrencyCodeWithAggregatesFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const JsonNullableWithAggregatesFilter_schema_1 = require("./JsonNullableWithAggregatesFilter.schema");
exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ExpenseShareScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), expenseId: zod_1.z.union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string()]).optional(), amount: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeWithAggregatesFilter_schema_1.EnumCurrencyCodeWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), locked: zod_1.z.union([zod_1.z.lazy(() => BoolWithAggregatesFilter_schema_1.BoolWithAggregatesFilterObjectSchema),
        zod_1.z.boolean()]).optional(), conversion: zod_1.z.lazy(() => JsonNullableWithAggregatesFilter_schema_1.JsonNullableWithAggregatesFilterObjectSchema).optional()
}).strict();
