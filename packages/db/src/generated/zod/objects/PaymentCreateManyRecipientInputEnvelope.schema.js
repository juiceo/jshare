"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateManyRecipientInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateManyRecipientInput_schema_1 = require("./PaymentCreateManyRecipientInput.schema");
exports.PaymentCreateManyRecipientInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateManyRecipientInput_schema_1.PaymentCreateManyRecipientInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateManyRecipientInput_schema_1.PaymentCreateManyRecipientInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
