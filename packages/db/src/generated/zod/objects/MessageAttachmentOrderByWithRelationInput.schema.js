"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const MessageOrderByWithRelationInput_schema_1 = require("./MessageOrderByWithRelationInput.schema");
const ExpenseOrderByWithRelationInput_schema_1 = require("./ExpenseOrderByWithRelationInput.schema");
exports.MessageAttachmentOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), messageId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), expenseId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), message: zod_1.z.lazy(() => MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema).optional().optional(), expense: zod_1.z.lazy(() => ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema).optional().optional()
}).strict();
