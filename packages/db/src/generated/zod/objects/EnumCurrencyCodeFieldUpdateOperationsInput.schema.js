"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
exports.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema).optional().optional()
}).strict();
