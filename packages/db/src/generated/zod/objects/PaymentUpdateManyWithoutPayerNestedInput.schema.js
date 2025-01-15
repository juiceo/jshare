"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyWithoutPayerNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateWithoutPayerInput_schema_1 = require("./PaymentCreateWithoutPayerInput.schema");
const PaymentUncheckedCreateWithoutPayerInput_schema_1 = require("./PaymentUncheckedCreateWithoutPayerInput.schema");
const PaymentCreateOrConnectWithoutPayerInput_schema_1 = require("./PaymentCreateOrConnectWithoutPayerInput.schema");
const PaymentUpsertWithWhereUniqueWithoutPayerInput_schema_1 = require("./PaymentUpsertWithWhereUniqueWithoutPayerInput.schema");
const PaymentCreateManyPayerInputEnvelope_schema_1 = require("./PaymentCreateManyPayerInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithWhereUniqueWithoutPayerInput_schema_1 = require("./PaymentUpdateWithWhereUniqueWithoutPayerInput.schema");
const PaymentUpdateManyWithWhereWithoutPayerInput_schema_1 = require("./PaymentUpdateManyWithWhereWithoutPayerInput.schema");
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
exports.PaymentUpdateManyWithoutPayerNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutPayerInput_schema_1.PaymentCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentCreateWithoutPayerInput_schema_1.PaymentCreateWithoutPayerInputObjectSchema).array(), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutPayerInput_schema_1.PaymentUncheckedCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutPayerInput_schema_1.PaymentUncheckedCreateWithoutPayerInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateOrConnectWithoutPayerInput_schema_1.PaymentCreateOrConnectWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateOrConnectWithoutPayerInput_schema_1.PaymentCreateOrConnectWithoutPayerInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPayerInput_schema_1.PaymentUpsertWithWhereUniqueWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPayerInput_schema_1.PaymentUpsertWithWhereUniqueWithoutPayerInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PaymentCreateManyPayerInputEnvelope_schema_1.PaymentCreateManyPayerInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPayerInput_schema_1.PaymentUpdateWithWhereUniqueWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPayerInput_schema_1.PaymentUpdateWithWhereUniqueWithoutPayerInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateManyWithWhereWithoutPayerInput_schema_1.PaymentUpdateManyWithWhereWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpdateManyWithWhereWithoutPayerInput_schema_1.PaymentUpdateManyWithWhereWithoutPayerInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
