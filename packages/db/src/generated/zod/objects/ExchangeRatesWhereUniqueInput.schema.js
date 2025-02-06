"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesWhereUniqueInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExchangeRatesWhereInput_schema_1 = require("./ExchangeRatesWhereInput.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const JsonFilter_schema_1 = require("./JsonFilter.schema");
exports.ExchangeRatesWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema),
        zod_1.z.lazy(() => ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema),
        zod_1.z.lazy(() => ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema).array()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), baseCurrency: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), rates: zod_1.z.lazy(() => JsonFilter_schema_1.JsonFilterObjectSchema).optional()
}).strict();
