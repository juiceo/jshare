"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("./ProfileOrderByWithRelationInput.schema");
const GroupOrderByWithRelationInput_schema_1 = require("./GroupOrderByWithRelationInput.schema");
const MessageAttachmentOrderByRelationAggregateInput_schema_1 = require("./MessageAttachmentOrderByRelationAggregateInput.schema");
exports.MessageOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), key: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), text: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), authorType: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), authorId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), author: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional(), group: zod_1.z.lazy(() => GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema).optional(), attachments: zod_1.z.lazy(() => MessageAttachmentOrderByRelationAggregateInput_schema_1.MessageAttachmentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
