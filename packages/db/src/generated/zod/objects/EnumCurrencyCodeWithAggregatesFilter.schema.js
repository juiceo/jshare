"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyCodeWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const NestedEnumCurrencyCodeWithAggregatesFilter_schema_1 = require("./NestedEnumCurrencyCodeWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumCurrencyCodeFilter_schema_1 = require("./NestedEnumCurrencyCodeFilter.schema");
exports.EnumCurrencyCodeWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).optional(), in: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).array().optional(), notIn: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => NestedEnumCurrencyCodeWithAggregatesFilter_schema_1.NestedEnumCurrencyCodeWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedEnumCurrencyCodeFilter_schema_1.NestedEnumCurrencyCodeFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedEnumCurrencyCodeFilter_schema_1.NestedEnumCurrencyCodeFilterObjectSchema).optional()
}).strict();
