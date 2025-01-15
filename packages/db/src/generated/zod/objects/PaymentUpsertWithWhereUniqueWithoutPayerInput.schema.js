"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpsertWithWhereUniqueWithoutPayerInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutPayerInput_schema_1 = require("./PaymentUpdateWithoutPayerInput.schema");
const PaymentUncheckedUpdateWithoutPayerInput_schema_1 = require("./PaymentUncheckedUpdateWithoutPayerInput.schema");
const PaymentCreateWithoutPayerInput_schema_1 = require("./PaymentCreateWithoutPayerInput.schema");
const PaymentUncheckedCreateWithoutPayerInput_schema_1 = require("./PaymentUncheckedCreateWithoutPayerInput.schema");
exports.PaymentUpsertWithWhereUniqueWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithoutPayerInput_schema_1.PaymentUpdateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateWithoutPayerInput_schema_1.PaymentUncheckedUpdateWithoutPayerInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutPayerInput_schema_1.PaymentCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutPayerInput_schema_1.PaymentUncheckedCreateWithoutPayerInputObjectSchema)])
}).strict();
