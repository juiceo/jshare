"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUncheckedCreateNestedManyWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentCreateWithoutGroupInput_schema_1 = require("./PaymentCreateWithoutGroupInput.schema");
const PaymentUncheckedCreateWithoutGroupInput_schema_1 = require("./PaymentUncheckedCreateWithoutGroupInput.schema");
const PaymentCreateOrConnectWithoutGroupInput_schema_1 = require("./PaymentCreateOrConnectWithoutGroupInput.schema");
const PaymentCreateManyGroupInputEnvelope_schema_1 = require("./PaymentCreateManyGroupInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
exports.PaymentUncheckedCreateNestedManyWithoutGroupInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutGroupInput_schema_1.PaymentCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentCreateWithoutGroupInput_schema_1.PaymentCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutGroupInput_schema_1.PaymentUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutGroupInput_schema_1.PaymentUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateOrConnectWithoutGroupInput_schema_1.PaymentCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => PaymentCreateOrConnectWithoutGroupInput_schema_1.PaymentCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => PaymentCreateManyGroupInputEnvelope_schema_1.PaymentCreateManyGroupInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
