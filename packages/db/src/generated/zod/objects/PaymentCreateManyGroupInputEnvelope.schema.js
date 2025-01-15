"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateManyGroupInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateManyGroupInput_schema_1 = require("./PaymentCreateManyGroupInput.schema");
exports.PaymentCreateManyGroupInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateManyGroupInput_schema_1.PaymentCreateManyGroupInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateManyGroupInput_schema_1.PaymentCreateManyGroupInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
