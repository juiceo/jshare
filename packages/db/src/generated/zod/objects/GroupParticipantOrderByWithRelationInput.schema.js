"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("./ProfileOrderByWithRelationInput.schema");
const GroupOrderByWithRelationInput_schema_1 = require("./GroupOrderByWithRelationInput.schema");
exports.GroupParticipantOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional().optional(), invitedById: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), inviteType: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), user: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional().optional(), group: zod_1.z.lazy(() => GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema).optional().optional()
}).strict();
