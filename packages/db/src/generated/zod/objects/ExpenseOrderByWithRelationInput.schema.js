"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("./ProfileOrderByWithRelationInput.schema");
const GroupOrderByWithRelationInput_schema_1 = require("./GroupOrderByWithRelationInput.schema");
const ExpenseShareOrderByRelationAggregateInput_schema_1 = require("./ExpenseShareOrderByRelationAggregateInput.schema");
const MessageAttachmentOrderByRelationAggregateInput_schema_1 = require("./MessageAttachmentOrderByRelationAggregateInput.schema");
exports.ExpenseOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), ownerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), payerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), description: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), conversion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), owner: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional().optional(), payer: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional().optional(), group: zod_1.z.lazy(() => GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema).optional().optional(), shares: zod_1.z.lazy(() => ExpenseShareOrderByRelationAggregateInput_schema_1.ExpenseShareOrderByRelationAggregateInputObjectSchema).optional().optional(), messageAttachments: zod_1.z.lazy(() => MessageAttachmentOrderByRelationAggregateInput_schema_1.MessageAttachmentOrderByRelationAggregateInputObjectSchema).optional().optional()
}).strict();
