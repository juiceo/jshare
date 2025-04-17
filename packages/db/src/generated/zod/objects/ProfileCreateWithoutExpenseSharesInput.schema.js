"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutExpenseSharesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const GroupParticipantCreateNestedManyWithoutUserInput_schema_1 = require("./GroupParticipantCreateNestedManyWithoutUserInput.schema");
const ImageCreateNestedOneWithoutProfileInput_schema_1 = require("./ImageCreateNestedOneWithoutProfileInput.schema");
const MessageCreateNestedManyWithoutAuthorInput_schema_1 = require("./MessageCreateNestedManyWithoutAuthorInput.schema");
const ExpenseCreateNestedManyWithoutOwnerInput_schema_1 = require("./ExpenseCreateNestedManyWithoutOwnerInput.schema");
const ExpenseCreateNestedManyWithoutPayerInput_schema_1 = require("./ExpenseCreateNestedManyWithoutPayerInput.schema");
const PaymentCreateNestedManyWithoutRecipientInput_schema_1 = require("./PaymentCreateNestedManyWithoutRecipientInput.schema");
const PaymentCreateNestedManyWithoutPayerInput_schema_1 = require("./PaymentCreateNestedManyWithoutPayerInput.schema");
exports.ProfileCreateWithoutExpenseSharesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), email: zod_1.z.string(), firstName: zod_1.z.string(), lastName: zod_1.z.string(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), temporary: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), termsAcceptedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), showInSearch: zod_1.z.boolean().optional().optional(), groups: zod_1.z.lazy(() => GroupParticipantCreateNestedManyWithoutUserInput_schema_1.GroupParticipantCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), avatar: zod_1.z.lazy(() => ImageCreateNestedOneWithoutProfileInput_schema_1.ImageCreateNestedOneWithoutProfileInputObjectSchema).optional().optional(), messages: zod_1.z.lazy(() => MessageCreateNestedManyWithoutAuthorInput_schema_1.MessageCreateNestedManyWithoutAuthorInputObjectSchema).optional().optional(), expensesOwned: zod_1.z.lazy(() => ExpenseCreateNestedManyWithoutOwnerInput_schema_1.ExpenseCreateNestedManyWithoutOwnerInputObjectSchema).optional().optional(), expensesPaid: zod_1.z.lazy(() => ExpenseCreateNestedManyWithoutPayerInput_schema_1.ExpenseCreateNestedManyWithoutPayerInputObjectSchema).optional().optional(), paymentsReceived: zod_1.z.lazy(() => PaymentCreateNestedManyWithoutRecipientInput_schema_1.PaymentCreateNestedManyWithoutRecipientInputObjectSchema).optional().optional(), paymentsPaid: zod_1.z.lazy(() => PaymentCreateNestedManyWithoutPayerInput_schema_1.PaymentCreateNestedManyWithoutPayerInputObjectSchema).optional().optional()
}).strict();
