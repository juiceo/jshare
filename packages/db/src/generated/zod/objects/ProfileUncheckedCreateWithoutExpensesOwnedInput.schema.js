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
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), email: zod_1.z.string(), firstName: zod_1.z.string(), lastName: zod_1.z.string(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), avatarId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), temporary: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), termsAcceptedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), showInSearch: zod_1.z.boolean().optional().optional(), groups: zod_1.z.lazy(() => GroupParticipantUncheckedCreateNestedManyWithoutUserInput_schema_1.GroupParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), messages: zod_1.z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInput_schema_1.MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional().optional(), expensesPaid: zod_1.z.lazy(() => ExpenseUncheckedCreateNestedManyWithoutPayerInput_schema_1.ExpenseUncheckedCreateNestedManyWithoutPayerInputObjectSchema).optional().optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareUncheckedCreateNestedManyWithoutUserInput_schema_1.ExpenseShareUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), paymentsReceived: zod_1.z.lazy(() => PaymentUncheckedCreateNestedManyWithoutRecipientInput_schema_1.PaymentUncheckedCreateNestedManyWithoutRecipientInputObjectSchema).optional().optional(), paymentsPaid: zod_1.z.lazy(() => PaymentUncheckedCreateNestedManyWithoutPayerInput_schema_1.PaymentUncheckedCreateNestedManyWithoutPayerInputObjectSchema).optional().optional()
}).strict();
