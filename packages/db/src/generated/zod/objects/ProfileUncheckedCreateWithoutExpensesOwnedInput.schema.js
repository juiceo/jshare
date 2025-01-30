"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedCreateWithoutExpensesOwnedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const GroupParticipantUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedCreateNestedManyWithoutUserInput.schema");
const MessageUncheckedCreateNestedManyWithoutAuthorInput_schema_1 = require("./MessageUncheckedCreateNestedManyWithoutAuthorInput.schema");
const ExpenseUncheckedCreateNestedManyWithoutPayerInput_schema_1 = require("./ExpenseUncheckedCreateNestedManyWithoutPayerInput.schema");
const ExpenseShareUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedCreateNestedManyWithoutUserInput.schema");
const PaymentUncheckedCreateNestedManyWithoutRecipientInput_schema_1 = require("./PaymentUncheckedCreateNestedManyWithoutRecipientInput.schema");
const PaymentUncheckedCreateNestedManyWithoutPayerInput_schema_1 = require("./PaymentUncheckedCreateNestedManyWithoutPayerInput.schema");
exports.ProfileUncheckedCreateWithoutExpensesOwnedInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.string(), email: zod_1.z.string(), firstName: zod_1.z.string(), lastName: zod_1.z.string(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), avatarId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), groups: zod_1.z.lazy(() => GroupParticipantUncheckedCreateNestedManyWithoutUserInput_schema_1.GroupParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInput_schema_1.MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(), expensesPaid: zod_1.z.lazy(() => ExpenseUncheckedCreateNestedManyWithoutPayerInput_schema_1.ExpenseUncheckedCreateNestedManyWithoutPayerInputObjectSchema).optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareUncheckedCreateNestedManyWithoutUserInput_schema_1.ExpenseShareUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(), paymentsReceived: zod_1.z.lazy(() => PaymentUncheckedCreateNestedManyWithoutRecipientInput_schema_1.PaymentUncheckedCreateNestedManyWithoutRecipientInputObjectSchema).optional(), paymentsPaid: zod_1.z.lazy(() => PaymentUncheckedCreateNestedManyWithoutPayerInput_schema_1.PaymentUncheckedCreateNestedManyWithoutPayerInputObjectSchema).optional()
}).strict();
