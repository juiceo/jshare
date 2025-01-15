"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCurrencyCodeFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
exports.NestedEnumCurrencyCodeFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).optional(), in: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).array().optional(), notIn: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => exports.NestedEnumCurrencyCodeFilterObjectSchema)]).optional()
}).strict();
