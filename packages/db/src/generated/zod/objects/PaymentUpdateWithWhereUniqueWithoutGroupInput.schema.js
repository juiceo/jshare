"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutGroupInput_schema_1 = require("./PaymentUpdateWithoutGroupInput.schema");
const PaymentUncheckedUpdateWithoutGroupInput_schema_1 = require("./PaymentUncheckedUpdateWithoutGroupInput.schema");
exports.PaymentUpdateWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithoutGroupInput_schema_1.PaymentUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateWithoutGroupInput_schema_1.PaymentUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
