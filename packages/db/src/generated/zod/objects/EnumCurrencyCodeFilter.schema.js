"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyCodeFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const NestedEnumCurrencyCodeFilter_schema_1 = require("./NestedEnumCurrencyCodeFilter.schema");
exports.EnumCurrencyCodeFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).optional(), in: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).array().optional(), notIn: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => NestedEnumCurrencyCodeFilter_schema_1.NestedEnumCurrencyCodeFilterObjectSchema)]).optional()
}).strict();
