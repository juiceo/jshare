"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const PaymentCountOrderByAggregateInput_schema_1 = require("./PaymentCountOrderByAggregateInput.schema");
const PaymentAvgOrderByAggregateInput_schema_1 = require("./PaymentAvgOrderByAggregateInput.schema");
const PaymentMaxOrderByAggregateInput_schema_1 = require("./PaymentMaxOrderByAggregateInput.schema");
const PaymentMinOrderByAggregateInput_schema_1 = require("./PaymentMinOrderByAggregateInput.schema");
const PaymentSumOrderByAggregateInput_schema_1 = require("./PaymentSumOrderByAggregateInput.schema");
exports.PaymentOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), conversion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), recipientId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), payerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => PaymentCountOrderByAggregateInput_schema_1.PaymentCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => PaymentAvgOrderByAggregateInput_schema_1.PaymentAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => PaymentMaxOrderByAggregateInput_schema_1.PaymentMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => PaymentMinOrderByAggregateInput_schema_1.PaymentMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => PaymentSumOrderByAggregateInput_schema_1.PaymentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
