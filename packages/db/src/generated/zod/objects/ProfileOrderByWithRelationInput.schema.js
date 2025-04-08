"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const GroupParticipantOrderByRelationAggregateInput_schema_1 = require("./GroupParticipantOrderByRelationAggregateInput.schema");
const ImageOrderByWithRelationInput_schema_1 = require("./ImageOrderByWithRelationInput.schema");
const MessageOrderByRelationAggregateInput_schema_1 = require("./MessageOrderByRelationAggregateInput.schema");
const ExpenseOrderByRelationAggregateInput_schema_1 = require("./ExpenseOrderByRelationAggregateInput.schema");
const ExpenseShareOrderByRelationAggregateInput_schema_1 = require("./ExpenseShareOrderByRelationAggregateInput.schema");
const PaymentOrderByRelationAggregateInput_schema_1 = require("./PaymentOrderByRelationAggregateInput.schema");
exports.ProfileOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), firstName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), lastName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), lastActivity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), avatarId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), temporary: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), termsAcceptedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), showInSearch: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groups: zod_1.z.lazy(() => GroupParticipantOrderByRelationAggregateInput_schema_1.GroupParticipantOrderByRelationAggregateInputObjectSchema).optional(), avatar: zod_1.z.lazy(() => ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageOrderByRelationAggregateInput_schema_1.MessageOrderByRelationAggregateInputObjectSchema).optional(), expensesOwned: zod_1.z.lazy(() => ExpenseOrderByRelationAggregateInput_schema_1.ExpenseOrderByRelationAggregateInputObjectSchema).optional(), expensesPaid: zod_1.z.lazy(() => ExpenseOrderByRelationAggregateInput_schema_1.ExpenseOrderByRelationAggregateInputObjectSchema).optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareOrderByRelationAggregateInput_schema_1.ExpenseShareOrderByRelationAggregateInputObjectSchema).optional(), paymentsReceived: zod_1.z.lazy(() => PaymentOrderByRelationAggregateInput_schema_1.PaymentOrderByRelationAggregateInputObjectSchema).optional(), paymentsPaid: zod_1.z.lazy(() => PaymentOrderByRelationAggregateInput_schema_1.PaymentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
