"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyWithoutRecipientNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateWithoutRecipientInput_schema_1 = require("./PaymentCreateWithoutRecipientInput.schema");
const PaymentUncheckedCreateWithoutRecipientInput_schema_1 = require("./PaymentUncheckedCreateWithoutRecipientInput.schema");
const PaymentCreateOrConnectWithoutRecipientInput_schema_1 = require("./PaymentCreateOrConnectWithoutRecipientInput.schema");
const PaymentUpsertWithWhereUniqueWithoutRecipientInput_schema_1 = require("./PaymentUpsertWithWhereUniqueWithoutRecipientInput.schema");
const PaymentCreateManyRecipientInputEnvelope_schema_1 = require("./PaymentCreateManyRecipientInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithWhereUniqueWithoutRecipientInput_schema_1 = require("./PaymentUpdateWithWhereUniqueWithoutRecipientInput.schema");
const PaymentUpdateManyWithWhereWithoutRecipientInput_schema_1 = require("./PaymentUpdateManyWithWhereWithoutRecipientInput.schema");
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
exports.PaymentUpdateManyWithoutRecipientNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutRecipientInput_schema_1.PaymentCreateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentCreateWithoutRecipientInput_schema_1.PaymentCreateWithoutRecipientInputObjectSchema).array(), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutRecipientInput_schema_1.PaymentUncheckedCreateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutRecipientInput_schema_1.PaymentUncheckedCreateWithoutRecipientInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateOrConnectWithoutRecipientInput_schema_1.PaymentCreateOrConnectWithoutRecipientInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateOrConnectWithoutRecipientInput_schema_1.PaymentCreateOrConnectWithoutRecipientInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => PaymentUpsertWithWhereUniqueWithoutRecipientInput_schema_1.PaymentUpsertWithWhereUniqueWithoutRecipientInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpsertWithWhereUniqueWithoutRecipientInput_schema_1.PaymentUpsertWithWhereUniqueWithoutRecipientInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PaymentCreateManyRecipientInputEnvelope_schema_1.PaymentCreateManyRecipientInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithWhereUniqueWithoutRecipientInput_schema_1.PaymentUpdateWithWhereUniqueWithoutRecipientInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpdateWithWhereUniqueWithoutRecipientInput_schema_1.PaymentUpdateWithWhereUniqueWithoutRecipientInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateManyWithWhereWithoutRecipientInput_schema_1.PaymentUpdateManyWithWhereWithoutRecipientInputObjectSchema),
        zod_1.z.lazy(() => PaymentUpdateManyWithWhereWithoutRecipientInput_schema_1.PaymentUpdateManyWithWhereWithoutRecipientInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
