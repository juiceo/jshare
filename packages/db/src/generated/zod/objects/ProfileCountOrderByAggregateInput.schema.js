"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ProfileCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), firstName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), lastName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), avatarId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
