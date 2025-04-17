"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCountOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.MessageCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), key: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), text: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), authorType: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), authorId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional()
}).strict();
