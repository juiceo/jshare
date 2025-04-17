"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const PaymentWhereInput_schema_1 = require("./PaymentWhereInput.schema");
exports.PaymentListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema).optional().optional(), some: zod_1.z.lazy(() => PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema).optional().optional(), none: zod_1.z.lazy(() => PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema).optional().optional()
}).strict();
