"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const GroupCountOrderByAggregateInput_schema_1 = require("./GroupCountOrderByAggregateInput.schema");
const GroupMaxOrderByAggregateInput_schema_1 = require("./GroupMaxOrderByAggregateInput.schema");
const GroupMinOrderByAggregateInput_schema_1 = require("./GroupMinOrderByAggregateInput.schema");
exports.GroupOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), coverImageId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), inviteCode: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), lastActivity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), _count: zod_1.z.lazy(() => GroupCountOrderByAggregateInput_schema_1.GroupCountOrderByAggregateInputObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => GroupMaxOrderByAggregateInput_schema_1.GroupMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => GroupMinOrderByAggregateInput_schema_1.GroupMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict();
