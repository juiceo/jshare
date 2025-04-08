"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const EnumCurrencyCodeFieldUpdateOperationsInput_schema_1 = require("./EnumCurrencyCodeFieldUpdateOperationsInput.schema");
const NullableBoolFieldUpdateOperationsInput_schema_1 = require("./NullableBoolFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const GroupParticipantUpdateManyWithoutUserNestedInput_schema_1 = require("./GroupParticipantUpdateManyWithoutUserNestedInput.schema");
const MessageUpdateManyWithoutAuthorNestedInput_schema_1 = require("./MessageUpdateManyWithoutAuthorNestedInput.schema");
const ExpenseUpdateManyWithoutOwnerNestedInput_schema_1 = require("./ExpenseUpdateManyWithoutOwnerNestedInput.schema");
const ExpenseUpdateManyWithoutPayerNestedInput_schema_1 = require("./ExpenseUpdateManyWithoutPayerNestedInput.schema");
const ExpenseShareUpdateManyWithoutUserNestedInput_schema_1 = require("./ExpenseShareUpdateManyWithoutUserNestedInput.schema");
const PaymentUpdateManyWithoutRecipientNestedInput_schema_1 = require("./PaymentUpdateManyWithoutRecipientNestedInput.schema");
const PaymentUpdateManyWithoutPayerNestedInput_schema_1 = require("./PaymentUpdateManyWithoutPayerNestedInput.schema");
exports.ProfileUpdateWithoutAvatarInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), email: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), firstName: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastName: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), lastActivity: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => EnumCurrencyCodeFieldUpdateOperationsInput_schema_1.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema)]).optional(), temporary: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => NullableBoolFieldUpdateOperationsInput_schema_1.NullableBoolFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), termsAcceptedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), showInSearch: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), groups: zod_1.z.lazy(() => GroupParticipantUpdateManyWithoutUserNestedInput_schema_1.GroupParticipantUpdateManyWithoutUserNestedInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageUpdateManyWithoutAuthorNestedInput_schema_1.MessageUpdateManyWithoutAuthorNestedInputObjectSchema).optional(), expensesOwned: zod_1.z.lazy(() => ExpenseUpdateManyWithoutOwnerNestedInput_schema_1.ExpenseUpdateManyWithoutOwnerNestedInputObjectSchema).optional(), expensesPaid: zod_1.z.lazy(() => ExpenseUpdateManyWithoutPayerNestedInput_schema_1.ExpenseUpdateManyWithoutPayerNestedInputObjectSchema).optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareUpdateManyWithoutUserNestedInput_schema_1.ExpenseShareUpdateManyWithoutUserNestedInputObjectSchema).optional(), paymentsReceived: zod_1.z.lazy(() => PaymentUpdateManyWithoutRecipientNestedInput_schema_1.PaymentUpdateManyWithoutRecipientNestedInputObjectSchema).optional(), paymentsPaid: zod_1.z.lazy(() => PaymentUpdateManyWithoutPayerNestedInput_schema_1.PaymentUpdateManyWithoutPayerNestedInputObjectSchema).optional()
}).strict();
