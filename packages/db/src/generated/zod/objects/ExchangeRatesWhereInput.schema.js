"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const JsonFilter_schema_1 = require("./JsonFilter.schema");
exports.ExchangeRatesWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ExchangeRatesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ExchangeRatesWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ExchangeRatesWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ExchangeRatesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ExchangeRatesWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), baseCurrency: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), rates: zod_1.z.lazy(() => JsonFilter_schema_1.JsonFilterObjectSchema).optional()
}).strict();
