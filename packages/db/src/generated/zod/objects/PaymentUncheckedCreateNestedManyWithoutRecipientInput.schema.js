"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUncheckedCreateNestedManyWithoutRecipientInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateWithoutRecipientInput_schema_1 = require("./PaymentCreateWithoutRecipientInput.schema");
const PaymentUncheckedCreateWithoutRecipientInput_schema_1 = require("./PaymentUncheckedCreateWithoutRecipientInput.schema");
const PaymentCreateOrConnectWithoutRecipientInput_schema_1 = require("./PaymentCreateOrConnectWithoutRecipientInput.schema");
const PaymentCreateManyRecipientInputEnvelope_schema_1 = require("./PaymentCreateManyRecipientInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
exports.PaymentUncheckedCreateNestedManyWithoutRecipientInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutRecipientInput_schema_1.PaymentCreateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentCreateWithoutRecipientInput_schema_1.PaymentCreateWithoutRecipientInputObjectSchema).array(), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutRecipientInput_schema_1.PaymentUncheckedCreateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutRecipientInput_schema_1.PaymentUncheckedCreateWithoutRecipientInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateOrConnectWithoutRecipientInput_schema_1.PaymentCreateOrConnectWithoutRecipientInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateOrConnectWithoutRecipientInput_schema_1.PaymentCreateOrConnectWithoutRecipientInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PaymentCreateManyRecipientInputEnvelope_schema_1.PaymentCreateManyRecipientInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
