"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUncheckedCreateWithoutSharesInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput.schema");
exports.ExpenseUncheckedCreateWithoutSharesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), ownerId: zod_1.z.string(), payerId: zod_1.z.string(), groupId: zod_1.z.string(), amount: zod_1.z.number(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema), messageAttachments: zod_1.z.lazy(() => MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInputObjectSchema).optional()
}).strict();
