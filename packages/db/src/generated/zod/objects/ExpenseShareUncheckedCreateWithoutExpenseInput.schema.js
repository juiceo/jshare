"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
exports.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), userId: zod_1.z.string(), amount: zod_1.z.number(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), locked: zod_1.z.boolean().optional(), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema)
}).strict();
