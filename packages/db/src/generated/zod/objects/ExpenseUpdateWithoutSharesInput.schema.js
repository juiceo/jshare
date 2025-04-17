"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateWithoutSharesInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const EnumCurrencyCodeFieldUpdateOperationsInput_schema_1 = require("./EnumCurrencyCodeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput_schema_1 = require("./ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput.schema");
const ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput_schema_1 = require("./ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput.schema");
const GroupUpdateOneRequiredWithoutExpensesNestedInput_schema_1 = require("./GroupUpdateOneRequiredWithoutExpensesNestedInput.schema");
const MessageAttachmentUpdateManyWithoutExpenseNestedInput_schema_1 = require("./MessageAttachmentUpdateManyWithoutExpenseNestedInput.schema");
exports.ExpenseUpdateWithoutSharesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), amount: zod_1.z.union([zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema)]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => EnumCurrencyCodeFieldUpdateOperationsInput_schema_1.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema)]).optional(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).optional(), owner: zod_1.z.lazy(() => ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput_schema_1.ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInputObjectSchema).optional().optional(), payer: zod_1.z.lazy(() => ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput_schema_1.ProfileUpdateOneRequiredWithoutExpensesPaidNestedInputObjectSchema).optional().optional(), group: zod_1.z.lazy(() => GroupUpdateOneRequiredWithoutExpensesNestedInput_schema_1.GroupUpdateOneRequiredWithoutExpensesNestedInputObjectSchema).optional().optional(), messageAttachments: zod_1.z.lazy(() => MessageAttachmentUpdateManyWithoutExpenseNestedInput_schema_1.MessageAttachmentUpdateManyWithoutExpenseNestedInputObjectSchema).optional().optional()
}).strict();
