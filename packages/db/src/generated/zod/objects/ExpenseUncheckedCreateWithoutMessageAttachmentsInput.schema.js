"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUncheckedCreateWithoutMessageAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput.schema");
exports.ExpenseUncheckedCreateWithoutMessageAttachmentsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), ownerId: zod_1.z.string(), payerId: zod_1.z.string(), groupId: zod_1.z.string(), amount: zod_1.z.number(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).optional(), shares: zod_1.z.lazy(() => ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateNestedManyWithoutExpenseInputObjectSchema).optional().optional()
}).strict();
