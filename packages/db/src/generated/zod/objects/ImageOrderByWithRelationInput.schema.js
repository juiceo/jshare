"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const GroupOrderByWithRelationInput_schema_1 = require("./GroupOrderByWithRelationInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("./ProfileOrderByWithRelationInput.schema");
exports.ImageOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), path: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), bucket: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), uploadedById: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), blurhash: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), Group: zod_1.z.lazy(() => GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema).optional(), Profile: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional()
}).strict();
