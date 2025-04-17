"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ExpenseCountOrderByAggregateInput_schema_1 = require("./ExpenseCountOrderByAggregateInput.schema");
const ExpenseAvgOrderByAggregateInput_schema_1 = require("./ExpenseAvgOrderByAggregateInput.schema");
const ExpenseMaxOrderByAggregateInput_schema_1 = require("./ExpenseMaxOrderByAggregateInput.schema");
const ExpenseMinOrderByAggregateInput_schema_1 = require("./ExpenseMinOrderByAggregateInput.schema");
const ExpenseSumOrderByAggregateInput_schema_1 = require("./ExpenseSumOrderByAggregateInput.schema");
exports.ExpenseOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), ownerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), payerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), description: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), conversion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => ExpenseCountOrderByAggregateInput_schema_1.ExpenseCountOrderByAggregateInputObjectSchema).optional().optional(), _avg: zod_1.z.lazy(() => ExpenseAvgOrderByAggregateInput_schema_1.ExpenseAvgOrderByAggregateInputObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => ExpenseMaxOrderByAggregateInput_schema_1.ExpenseMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => ExpenseMinOrderByAggregateInput_schema_1.ExpenseMinOrderByAggregateInputObjectSchema).optional().optional(), _sum: zod_1.z.lazy(() => ExpenseSumOrderByAggregateInput_schema_1.ExpenseSumOrderByAggregateInputObjectSchema).optional().optional()
}).strict();
