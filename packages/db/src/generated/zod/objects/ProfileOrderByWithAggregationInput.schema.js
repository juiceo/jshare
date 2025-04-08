"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProfileCountOrderByAggregateInput_schema_1 = require("./ProfileCountOrderByAggregateInput.schema");
const ProfileMaxOrderByAggregateInput_schema_1 = require("./ProfileMaxOrderByAggregateInput.schema");
const ProfileMinOrderByAggregateInput_schema_1 = require("./ProfileMinOrderByAggregateInput.schema");
exports.ProfileOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), firstName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), lastName: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), lastActivity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), avatarId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), temporary: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), termsAcceptedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), showInSearch: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => ProfileCountOrderByAggregateInput_schema_1.ProfileCountOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => ProfileMaxOrderByAggregateInput_schema_1.ProfileMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => ProfileMinOrderByAggregateInput_schema_1.ProfileMinOrderByAggregateInputObjectSchema).optional()
}).strict();
