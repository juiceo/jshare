"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyWithWhereWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
const PaymentUpdateManyMutationInput_schema_1 = require("./PaymentUpdateManyMutationInput.schema");
const PaymentUncheckedUpdateManyWithoutPayerInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutPayerInput.schema");
exports.PaymentUpdateManyWithWhereWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateManyMutationInput_schema_1.PaymentUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateManyWithoutPayerInput_schema_1.PaymentUncheckedUpdateManyWithoutPayerInputObjectSchema)])
}).strict();
