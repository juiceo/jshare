"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ExchangeRatesCountOrderByAggregateInput_schema_1 = require("./ExchangeRatesCountOrderByAggregateInput.schema");
const ExchangeRatesMaxOrderByAggregateInput_schema_1 = require("./ExchangeRatesMaxOrderByAggregateInput.schema");
const ExchangeRatesMinOrderByAggregateInput_schema_1 = require("./ExchangeRatesMinOrderByAggregateInput.schema");
exports.ExchangeRatesOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), baseCurrency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), rates: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), _count: zod_1.z.lazy(() => ExchangeRatesCountOrderByAggregateInput_schema_1.ExchangeRatesCountOrderByAggregateInputObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => ExchangeRatesMaxOrderByAggregateInput_schema_1.ExchangeRatesMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => ExchangeRatesMinOrderByAggregateInput_schema_1.ExchangeRatesMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict();
