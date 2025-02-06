"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantMinOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.GroupParticipantMinOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), invitedById: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), inviteType: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
