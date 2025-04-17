"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ProfileCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), firstName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), lastName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), lastActivity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), avatarId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), temporary: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), termsAcceptedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), showInSearch: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional()
}).strict();
