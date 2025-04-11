"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const GroupParticipantCountOrderByAggregateInput_schema_1 = require("./GroupParticipantCountOrderByAggregateInput.schema");
const GroupParticipantMaxOrderByAggregateInput_schema_1 = require("./GroupParticipantMaxOrderByAggregateInput.schema");
const GroupParticipantMinOrderByAggregateInput_schema_1 = require("./GroupParticipantMinOrderByAggregateInput.schema");
exports.GroupParticipantOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), invitedById: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), inviteType: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => GroupParticipantCountOrderByAggregateInput_schema_1.GroupParticipantCountOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => GroupParticipantMaxOrderByAggregateInput_schema_1.GroupParticipantMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => GroupParticipantMinOrderByAggregateInput_schema_1.GroupParticipantMinOrderByAggregateInputObjectSchema).optional()
}).strict();
