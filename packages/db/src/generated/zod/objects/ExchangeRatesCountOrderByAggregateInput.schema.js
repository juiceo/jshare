"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesCountOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ExchangeRatesCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), baseCurrency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), rates: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional()
}).strict();
