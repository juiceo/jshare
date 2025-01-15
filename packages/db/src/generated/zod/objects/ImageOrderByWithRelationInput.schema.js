"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const GroupOrderByRelationAggregateInput_schema_1 = require("./GroupOrderByRelationAggregateInput.schema");
const ProfileOrderByRelationAggregateInput_schema_1 = require("./ProfileOrderByRelationAggregateInput.schema");
exports.ImageOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), path: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), bucket: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), uploadedById: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), blurhash: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), Group: zod_1.z.lazy(() => GroupOrderByRelationAggregateInput_schema_1.GroupOrderByRelationAggregateInputObjectSchema).optional(), Profile: zod_1.z.lazy(() => ProfileOrderByRelationAggregateInput_schema_1.ProfileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
