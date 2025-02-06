"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMinOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.MessageMinOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), key: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), text: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), authorType: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), authorId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
