"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ExpenseShareCountOrderByAggregateInput_schema_1 = require("./ExpenseShareCountOrderByAggregateInput.schema");
const ExpenseShareAvgOrderByAggregateInput_schema_1 = require("./ExpenseShareAvgOrderByAggregateInput.schema");
const ExpenseShareMaxOrderByAggregateInput_schema_1 = require("./ExpenseShareMaxOrderByAggregateInput.schema");
const ExpenseShareMinOrderByAggregateInput_schema_1 = require("./ExpenseShareMinOrderByAggregateInput.schema");
const ExpenseShareSumOrderByAggregateInput_schema_1 = require("./ExpenseShareSumOrderByAggregateInput.schema");
exports.ExpenseShareOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), expenseId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), locked: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), conversion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => ExpenseShareCountOrderByAggregateInput_schema_1.ExpenseShareCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => ExpenseShareAvgOrderByAggregateInput_schema_1.ExpenseShareAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => ExpenseShareMaxOrderByAggregateInput_schema_1.ExpenseShareMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => ExpenseShareMinOrderByAggregateInput_schema_1.ExpenseShareMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => ExpenseShareSumOrderByAggregateInput_schema_1.ExpenseShareSumOrderByAggregateInputObjectSchema).optional()
}).strict();
