"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateWithWhereUniqueWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutPayerInput_schema_1 = require("./PaymentUpdateWithoutPayerInput.schema");
const PaymentUncheckedUpdateWithoutPayerInput_schema_1 = require("./PaymentUncheckedUpdateWithoutPayerInput.schema");
exports.PaymentUpdateWithWhereUniqueWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithoutPayerInput_schema_1.PaymentUpdateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateWithoutPayerInput_schema_1.PaymentUncheckedUpdateWithoutPayerInputObjectSchema)])
}).strict();
