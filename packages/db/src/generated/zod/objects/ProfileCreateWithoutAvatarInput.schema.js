"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const GroupParticipantCreateNestedManyWithoutUserInput_schema_1 = require("./GroupParticipantCreateNestedManyWithoutUserInput.schema");
const MessageCreateNestedManyWithoutAuthorInput_schema_1 = require("./MessageCreateNestedManyWithoutAuthorInput.schema");
const ExpenseCreateNestedManyWithoutOwnerInput_schema_1 = require("./ExpenseCreateNestedManyWithoutOwnerInput.schema");
const ExpenseCreateNestedManyWithoutPayerInput_schema_1 = require("./ExpenseCreateNestedManyWithoutPayerInput.schema");
const ExpenseShareCreateNestedManyWithoutUserInput_schema_1 = require("./ExpenseShareCreateNestedManyWithoutUserInput.schema");
const PaymentCreateNestedManyWithoutRecipientInput_schema_1 = require("./PaymentCreateNestedManyWithoutRecipientInput.schema");
const PaymentCreateNestedManyWithoutPayerInput_schema_1 = require("./PaymentCreateNestedManyWithoutPayerInput.schema");
exports.ProfileCreateWithoutAvatarInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.string(), email: zod_1.z.string(), firstName: zod_1.z.string(), lastName: zod_1.z.string(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), temporary: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), groups: zod_1.z.lazy(() => GroupParticipantCreateNestedManyWithoutUserInput_schema_1.GroupParticipantCreateNestedManyWithoutUserInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageCreateNestedManyWithoutAuthorInput_schema_1.MessageCreateNestedManyWithoutAuthorInputObjectSchema).optional(), expensesOwned: zod_1.z.lazy(() => ExpenseCreateNestedManyWithoutOwnerInput_schema_1.ExpenseCreateNestedManyWithoutOwnerInputObjectSchema).optional(), expensesPaid: zod_1.z.lazy(() => ExpenseCreateNestedManyWithoutPayerInput_schema_1.ExpenseCreateNestedManyWithoutPayerInputObjectSchema).optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareCreateNestedManyWithoutUserInput_schema_1.ExpenseShareCreateNestedManyWithoutUserInputObjectSchema).optional(), paymentsReceived: zod_1.z.lazy(() => PaymentCreateNestedManyWithoutRecipientInput_schema_1.PaymentCreateNestedManyWithoutRecipientInputObjectSchema).optional(), paymentsPaid: zod_1.z.lazy(() => PaymentCreateNestedManyWithoutPayerInput_schema_1.PaymentCreateNestedManyWithoutPayerInputObjectSchema).optional()
}).strict();
