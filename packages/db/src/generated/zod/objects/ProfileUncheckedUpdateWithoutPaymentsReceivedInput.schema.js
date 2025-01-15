"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedUpdateWithoutPaymentsReceivedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const EnumCurrencyCodeFieldUpdateOperationsInput_schema_1 = require("./EnumCurrencyCodeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const GroupParticipantUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./GroupParticipantUncheckedUpdateManyWithoutUserNestedInput.schema");
const MessageUncheckedUpdateManyWithoutAuthorNestedInput_schema_1 = require("./MessageUncheckedUpdateManyWithoutAuthorNestedInput.schema");
const ExpenseUncheckedUpdateManyWithoutOwnerNestedInput_schema_1 = require("./ExpenseUncheckedUpdateManyWithoutOwnerNestedInput.schema");
const ExpenseUncheckedUpdateManyWithoutPayerNestedInput_schema_1 = require("./ExpenseUncheckedUpdateManyWithoutPayerNestedInput.schema");
const ExpenseShareUncheckedUpdateManyWithoutUserNestedInput_schema_1 = require("./ExpenseShareUncheckedUpdateManyWithoutUserNestedInput.schema");
const PaymentUncheckedUpdateManyWithoutPayerNestedInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutPayerNestedInput.schema");
exports.ProfileUncheckedUpdateWithoutPaymentsReceivedInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => EnumCurrencyCodeFieldUpdateOperationsInput_schema_1.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema)]).optional(), avatarId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), groups: zod_1.z.lazy(() => GroupParticipantUncheckedUpdateManyWithoutUserNestedInput_schema_1.GroupParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput_schema_1.MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(), expensesOwned: zod_1.z.lazy(() => ExpenseUncheckedUpdateManyWithoutOwnerNestedInput_schema_1.ExpenseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(), expensesPaid: zod_1.z.lazy(() => ExpenseUncheckedUpdateManyWithoutPayerNestedInput_schema_1.ExpenseUncheckedUpdateManyWithoutPayerNestedInputObjectSchema).optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareUncheckedUpdateManyWithoutUserNestedInput_schema_1.ExpenseShareUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(), paymentsPaid: zod_1.z.lazy(() => PaymentUncheckedUpdateManyWithoutPayerNestedInput_schema_1.PaymentUncheckedUpdateManyWithoutPayerNestedInputObjectSchema).optional()
}).strict();
