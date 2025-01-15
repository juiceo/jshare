"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseMaxOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ExpenseMaxOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), ownerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), payerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
