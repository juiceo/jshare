"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMinOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PaymentMinOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), recipientId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), payerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional()
}).strict();
