"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCreateInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const ProfileCreateNestedOneWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateNestedOneWithoutExpenseSharesInput.schema");
const ExpenseCreateNestedOneWithoutSharesInput_schema_1 = require("./ExpenseCreateNestedOneWithoutSharesInput.schema");
exports.ExpenseShareCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), amount: zod_1.z.number(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), locked: zod_1.z.boolean().optional(), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema), user: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutExpenseSharesInput_schema_1.ProfileCreateNestedOneWithoutExpenseSharesInputObjectSchema), expense: zod_1.z.lazy(() => ExpenseCreateNestedOneWithoutSharesInput_schema_1.ExpenseCreateNestedOneWithoutSharesInputObjectSchema)
}).strict();
