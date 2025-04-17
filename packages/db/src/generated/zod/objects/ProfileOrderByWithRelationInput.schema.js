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
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), firstName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), lastName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), lastActivity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), avatarId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), temporary: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), termsAcceptedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), showInSearch: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), groups: zod_1.z.lazy(() => GroupParticipantOrderByRelationAggregateInput_schema_1.GroupParticipantOrderByRelationAggregateInputObjectSchema).optional().optional(), avatar: zod_1.z.lazy(() => ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema).optional().optional(), messages: zod_1.z.lazy(() => MessageOrderByRelationAggregateInput_schema_1.MessageOrderByRelationAggregateInputObjectSchema).optional().optional(), expensesOwned: zod_1.z.lazy(() => ExpenseOrderByRelationAggregateInput_schema_1.ExpenseOrderByRelationAggregateInputObjectSchema).optional().optional(), expensesPaid: zod_1.z.lazy(() => ExpenseOrderByRelationAggregateInput_schema_1.ExpenseOrderByRelationAggregateInputObjectSchema).optional().optional(), expenseShares: zod_1.z.lazy(() => ExpenseShareOrderByRelationAggregateInput_schema_1.ExpenseShareOrderByRelationAggregateInputObjectSchema).optional().optional(), paymentsReceived: zod_1.z.lazy(() => PaymentOrderByRelationAggregateInput_schema_1.PaymentOrderByRelationAggregateInputObjectSchema).optional().optional(), paymentsPaid: zod_1.z.lazy(() => PaymentOrderByRelationAggregateInput_schema_1.PaymentOrderByRelationAggregateInputObjectSchema).optional().optional()
}).strict();
