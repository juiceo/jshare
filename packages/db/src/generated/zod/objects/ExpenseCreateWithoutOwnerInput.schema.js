"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateWithoutOwnerInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const ProfileCreateNestedOneWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateNestedOneWithoutExpensesPaidInput.schema");
const GroupCreateNestedOneWithoutExpensesInput_schema_1 = require("./GroupCreateNestedOneWithoutExpensesInput.schema");
const ExpenseShareCreateNestedManyWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateNestedManyWithoutExpenseInput.schema");
const MessageAttachmentCreateNestedManyWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateNestedManyWithoutExpenseInput.schema");
exports.ExpenseCreateWithoutOwnerInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), amount: zod_1.z.number(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).optional(), payer: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutExpensesPaidInput_schema_1.ProfileCreateNestedOneWithoutExpensesPaidInputObjectSchema), group: zod_1.z.lazy(() => GroupCreateNestedOneWithoutExpensesInput_schema_1.GroupCreateNestedOneWithoutExpensesInputObjectSchema), shares: zod_1.z.lazy(() => ExpenseShareCreateNestedManyWithoutExpenseInput_schema_1.ExpenseShareCreateNestedManyWithoutExpenseInputObjectSchema).optional().optional(), messageAttachments: zod_1.z.lazy(() => MessageAttachmentCreateNestedManyWithoutExpenseInput_schema_1.MessageAttachmentCreateNestedManyWithoutExpenseInputObjectSchema).optional().optional()
}).strict();
