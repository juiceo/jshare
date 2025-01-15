"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpsertWithWhereUniqueWithoutRecipientInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutRecipientInput_schema_1 = require("./PaymentUpdateWithoutRecipientInput.schema");
const PaymentUncheckedUpdateWithoutRecipientInput_schema_1 = require("./PaymentUncheckedUpdateWithoutRecipientInput.schema");
const PaymentCreateWithoutRecipientInput_schema_1 = require("./PaymentCreateWithoutRecipientInput.schema");
const PaymentUncheckedCreateWithoutRecipientInput_schema_1 = require("./PaymentUncheckedCreateWithoutRecipientInput.schema");
exports.PaymentUpsertWithWhereUniqueWithoutRecipientInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithoutRecipientInput_schema_1.PaymentUpdateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateWithoutRecipientInput_schema_1.PaymentUncheckedUpdateWithoutRecipientInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutRecipientInput_schema_1.PaymentCreateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutRecipientInput_schema_1.PaymentUncheckedCreateWithoutRecipientInputObjectSchema)])
}).strict();
