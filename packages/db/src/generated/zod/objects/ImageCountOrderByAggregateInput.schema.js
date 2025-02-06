"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCountOrderByAggregateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ImageCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), path: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), bucket: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), uploadedById: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), blurhash: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
