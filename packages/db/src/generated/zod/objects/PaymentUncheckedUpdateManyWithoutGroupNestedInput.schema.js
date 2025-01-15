"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUncheckedUpdateManyWithoutGroupNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateWithoutGroupInput_schema_1 = require("./PaymentCreateWithoutGroupInput.schema");
const PaymentUncheckedCreateWithoutGroupInput_schema_1 = require("./PaymentUncheckedCreateWithoutGroupInput.schema");
const PaymentCreateOrConnectWithoutGroupInput_schema_1 = require("./PaymentCreateOrConnectWithoutGroupInput.schema");
const PaymentUpsertWithWhereUniqueWithoutGroupInput_schema_1 = require("./PaymentUpsertWithWhereUniqueWithoutGroupInput.schema");
const PaymentCreateManyGroupInputEnvelope_schema_1 = require("./PaymentCreateManyGroupInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithWhereUniqueWithoutGroupInput_schema_1 = require("./PaymentUpdateWithWhereUniqueWithoutGroupInput.schema");
const PaymentUpdateManyWithWhereWithoutGroupInput_schema_1 = require("./PaymentUpdateManyWithWhereWithoutGroupInput.schema");
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
exports.PaymentUncheckedUpdateManyWithoutGroupNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutGroupInput_schema_1.PaymentCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentCreateWithoutGroupInput_schema_1.PaymentCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutGroupInput_schema_1.PaymentUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutGroupInput_schema_1.PaymentUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateOrConnectWithoutGroupInput_schema_1.PaymentCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateOrConnectWithoutGroupInput_schema_1.PaymentCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PaymentUpsertWithWhereUniqueWithoutGroupInput_schema_1.PaymentUpsertWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpsertWithWhereUniqueWithoutGroupInput_schema_1.PaymentUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PaymentCreateManyGroupInputEnvelope_schema_1.PaymentCreateManyGroupInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithWhereUniqueWithoutGroupInput_schema_1.PaymentUpdateWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpdateWithWhereUniqueWithoutGroupInput_schema_1.PaymentUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateManyWithWhereWithoutGroupInput_schema_1.PaymentUpdateManyWithWhereWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpdateManyWithWhereWithoutGroupInput_schema_1.PaymentUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
