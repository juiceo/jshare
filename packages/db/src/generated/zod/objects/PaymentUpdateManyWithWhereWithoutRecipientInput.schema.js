"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyWithWhereWithoutRecipientInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
const PaymentUpdateManyMutationInput_schema_1 = require("./PaymentUpdateManyMutationInput.schema");
const PaymentUncheckedUpdateManyWithoutRecipientInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutRecipientInput.schema");
exports.PaymentUpdateManyWithWhereWithoutRecipientInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateManyMutationInput_schema_1.PaymentUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateManyWithoutRecipientInput_schema_1.PaymentUncheckedUpdateManyWithoutRecipientInputObjectSchema)])
}).strict();
