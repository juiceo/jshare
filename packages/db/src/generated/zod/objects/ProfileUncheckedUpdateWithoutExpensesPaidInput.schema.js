"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedUpdateWithoutExpensesPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const EnumCurrencyCodeFieldUpdateOperationsInput_schema_1 = require("./EnumCurrencyCodeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableBoolFieldUpdateOperationsInput_schema_1 = require("./NullableBoolFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const GroupParticipantUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./GroupParticipantUncheckedUpdateManyWithoutUserNestedInput.schema");
const MessageUncheckedUpdateManyWithoutAuthorNestedInput_schema_1 = require("./MessageUncheckedUpdateManyWithoutAuthorNestedInput.schema");
const ExpenseUncheckedUpdateManyWithoutOwnerNestedInput_schema_1 = require("./ExpenseUncheckedUpdateManyWithoutOwnerNestedInput.schema");
const ExpenseShareUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./ExpenseShareUncheckedUpdateManyWithoutUserNestedInput.schema");
const PaymentUncheckedUpdateManyWithoutRecipientNestedInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutRecipientNestedInput.schema");
const PaymentUncheckedUpdateManyWithoutPayerNestedInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutPayerNestedInput.schema");
exports.ProfileUncheckedUpdateWithoutExpensesPaidInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastActivity: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => EnumCurrencyCodeFieldUpdateOperationsInput_schema_1.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema)]).optional(), avatarId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), temporary: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => NullableBoolFieldUpdateOperationsInput_schema_1.NullableBoolFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), privacyPolicyAcceptedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), groups: zod_1.z.lazy(() => GroupParticipantUncheckedUpdateManyWithoutUserNestedInput_schema_1.GroupParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput_schema_1.MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(), expensesOwned: zod_1.z.lazy(() => ExpenseUncheckedUpdateManyWithoutOwnerNestedInput_schema_1.ExpenseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareUncheckedUpdateManyWithoutUserNestedInput_schema_1.ExpenseShareUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), paymentsReceived: zod_1.z.lazy(() => PaymentUncheckedUpdateManyWithoutRecipientNestedInput_schema_1.PaymentUncheckedUpdateManyWithoutRecipientNestedInputObjectSchema).optional(), paymentsPaid: zod_1.z.lazy(() => PaymentUncheckedUpdateManyWithoutPayerNestedInput_schema_1.PaymentUncheckedUpdateManyWithoutPayerNestedInputObjectSchema).optional()
}).strict();
