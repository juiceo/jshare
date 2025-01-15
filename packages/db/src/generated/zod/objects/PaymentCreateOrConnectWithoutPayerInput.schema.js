"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateOrConnectWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentCreateWithoutPayerInput_schema_1 = require("./PaymentCreateWithoutPayerInput.schema");
const PaymentUncheckedCreateWithoutPayerInput_schema_1 = require("./PaymentUncheckedCreateWithoutPayerInput.schema");
exports.PaymentCreateOrConnectWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutPayerInput_schema_1.PaymentCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutPayerInput_schema_1.PaymentUncheckedCreateWithoutPayerInputObjectSchema)])
}).strict();
