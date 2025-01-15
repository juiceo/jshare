"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateManyPayerInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateManyPayerInput_schema_1 = require("./PaymentCreateManyPayerInput.schema");
exports.PaymentCreateManyPayerInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateManyPayerInput_schema_1.PaymentCreateManyPayerInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateManyPayerInput_schema_1.PaymentCreateManyPayerInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
