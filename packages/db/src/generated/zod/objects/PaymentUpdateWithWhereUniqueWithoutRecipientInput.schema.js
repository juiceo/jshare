"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateWithWhereUniqueWithoutRecipientInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutRecipientInput_schema_1 = require("./PaymentUpdateWithoutRecipientInput.schema");
const PaymentUncheckedUpdateWithoutRecipientInput_schema_1 = require("./PaymentUncheckedUpdateWithoutRecipientInput.schema");
exports.PaymentUpdateWithWhereUniqueWithoutRecipientInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithoutRecipientInput_schema_1.PaymentUpdateWithoutRecipientInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateWithoutRecipientInput_schema_1.PaymentUncheckedUpdateWithoutRecipientInputObjectSchema)])
}).strict();
