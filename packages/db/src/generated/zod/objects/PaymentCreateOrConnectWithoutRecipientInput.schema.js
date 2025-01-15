"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateOrConnectWithoutRecipientInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentCreateWithoutRecipientInput_schema_1 = require("./PaymentCreateWithoutRecipientInput.schema");
const PaymentUncheckedCreateWithoutRecipientInput_schema_1 = require("./PaymentUncheckedCreateWithoutRecipientInput.schema");
exports.PaymentCreateOrConnectWithoutRecipientInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutRecipientInput_schema_1.PaymentCreateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutRecipientInput_schema_1.PaymentUncheckedCreateWithoutRecipientInputObjectSchema)])
}).strict();
