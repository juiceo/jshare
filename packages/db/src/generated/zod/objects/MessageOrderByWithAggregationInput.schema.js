"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const MessageCountOrderByAggregateInput_schema_1 = require("./MessageCountOrderByAggregateInput.schema");
const MessageMaxOrderByAggregateInput_schema_1 = require("./MessageMaxOrderByAggregateInput.schema");
const MessageMinOrderByAggregateInput_schema_1 = require("./MessageMinOrderByAggregateInput.schema");
exports.MessageOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), key: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), text: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), authorType: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), authorId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), _count: zod_1.z.lazy(() => MessageCountOrderByAggregateInput_schema_1.MessageCountOrderByAggregateInputObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => MessageMaxOrderByAggregateInput_schema_1.MessageMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => MessageMinOrderByAggregateInput_schema_1.MessageMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict();
