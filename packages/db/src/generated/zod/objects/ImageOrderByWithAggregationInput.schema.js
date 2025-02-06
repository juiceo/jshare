"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOrderByWithAggregationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ImageCountOrderByAggregateInput_schema_1 = require("./ImageCountOrderByAggregateInput.schema");
const ImageMaxOrderByAggregateInput_schema_1 = require("./ImageMaxOrderByAggregateInput.schema");
const ImageMinOrderByAggregateInput_schema_1 = require("./ImageMinOrderByAggregateInput.schema");
exports.ImageOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), path: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), bucket: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), uploadedById: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), blurhash: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => ImageCountOrderByAggregateInput_schema_1.ImageCountOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => ImageMaxOrderByAggregateInput_schema_1.ImageMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => ImageMinOrderByAggregateInput_schema_1.ImageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
