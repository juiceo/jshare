"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCountOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.MessageAttachmentCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), messageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), expenseId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional()
}).strict();
