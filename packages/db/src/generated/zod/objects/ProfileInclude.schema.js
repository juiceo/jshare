"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileIncludeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantInput_schema_1 = require("../input/GroupParticipantInput.schema");
const ImageArgs_schema_1 = require("./ImageArgs.schema");
const MessageInput_schema_1 = require("../input/MessageInput.schema");
const ExpenseInput_schema_1 = require("../input/ExpenseInput.schema");
const ExpenseShareInput_schema_1 = require("../input/ExpenseShareInput.schema");
const PaymentInput_schema_1 = require("../input/PaymentInput.schema");
const ProfileCountOutputTypeArgs_schema_1 = require("./ProfileCountOutputTypeArgs.schema");
exports.ProfileIncludeObjectSchema = zod_1.z.object({
    groups: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupParticipantInput_schema_1.GroupParticipantInputSchema.findMany)]).optional(), avatar: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageArgs_schema_1.ImageArgsObjectSchema)]).optional(), messages: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageInput_schema_1.MessageInputSchema.findMany)]).optional(), expensesOwned: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseInput_schema_1.ExpenseInputSchema.findMany)]).optional(), expensesPaid: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseInput_schema_1.ExpenseInputSchema.findMany)]).optional(), expenseShares: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseShareInput_schema_1.ExpenseShareInputSchema.findMany)]).optional(), paymentsReceived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PaymentInput_schema_1.PaymentInputSchema.findMany)]).optional(), paymentsPaid: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PaymentInput_schema_1.PaymentInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileCountOutputTypeArgs_schema_1.ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
