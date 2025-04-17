"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const MessageAttachmentCountOrderByAggregateInput_schema_1 = require("./MessageAttachmentCountOrderByAggregateInput.schema");
const MessageAttachmentMaxOrderByAggregateInput_schema_1 = require("./MessageAttachmentMaxOrderByAggregateInput.schema");
const MessageAttachmentMinOrderByAggregateInput_schema_1 = require("./MessageAttachmentMinOrderByAggregateInput.schema");
exports.MessageAttachmentOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), messageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), expenseId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => MessageAttachmentCountOrderByAggregateInput_schema_1.MessageAttachmentCountOrderByAggregateInputObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => MessageAttachmentMaxOrderByAggregateInput_schema_1.MessageAttachmentMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => MessageAttachmentMinOrderByAggregateInput_schema_1.MessageAttachmentMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict();
