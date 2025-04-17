"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUncheckedCreateNestedManyWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateWithoutPayerInput_schema_1 = require("./PaymentCreateWithoutPayerInput.schema");
const PaymentUncheckedCreateWithoutPayerInput_schema_1 = require("./PaymentUncheckedCreateWithoutPayerInput.schema");
const PaymentCreateOrConnectWithoutPayerInput_schema_1 = require("./PaymentCreateOrConnectWithoutPayerInput.schema");
const PaymentCreateManyPayerInputEnvelope_schema_1 = require("./PaymentCreateManyPayerInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
exports.PaymentUncheckedCreateNestedManyWithoutPayerInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutPayerInput_schema_1.PaymentCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentCreateWithoutPayerInput_schema_1.PaymentCreateWithoutPayerInputObjectSchema).array(), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutPayerInput_schema_1.PaymentUncheckedCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutPayerInput_schema_1.PaymentUncheckedCreateWithoutPayerInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateOrConnectWithoutPayerInput_schema_1.PaymentCreateOrConnectWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateOrConnectWithoutPayerInput_schema_1.PaymentCreateOrConnectWithoutPayerInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PaymentCreateManyPayerInputEnvelope_schema_1.PaymentCreateManyPayerInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
