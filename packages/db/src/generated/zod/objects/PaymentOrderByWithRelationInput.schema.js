"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentOrderByWithRelationInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const GroupOrderByWithRelationInput_schema_1 = require("./GroupOrderByWithRelationInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("./ProfileOrderByWithRelationInput.schema");
exports.PaymentOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), groupId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), currency: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), conversion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), recipientId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), payerId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), group: zod_1.z.lazy(() => GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema).optional(), recipient: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional(), payer: zod_1.z.lazy(() => ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema).optional()
}).strict();
