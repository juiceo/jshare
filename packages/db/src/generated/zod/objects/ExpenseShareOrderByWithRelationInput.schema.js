"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("./ProfileOrderByWithRelationInput.schema");
const ExpenseOrderByWithRelationInput_schema_1 = require("./ExpenseOrderByWithRelationInput.schema");
exports.ExpenseShareOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), expenseId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), locked: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), conversion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), user: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional(), expense: zod_1.z.lazy(() => ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema).optional()
}).strict();
