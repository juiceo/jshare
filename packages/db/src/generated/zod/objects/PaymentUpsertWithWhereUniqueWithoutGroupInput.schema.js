"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpsertWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutGroupInput_schema_1 = require("./PaymentUpdateWithoutGroupInput.schema");
const PaymentUncheckedUpdateWithoutGroupInput_schema_1 = require("./PaymentUncheckedUpdateWithoutGroupInput.schema");
const PaymentCreateWithoutGroupInput_schema_1 = require("./PaymentCreateWithoutGroupInput.schema");
const PaymentUncheckedCreateWithoutGroupInput_schema_1 = require("./PaymentUncheckedCreateWithoutGroupInput.schema");
exports.PaymentUpsertWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => PaymentUpdateWithoutGroupInput_schema_1.PaymentUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedUpdateWithoutGroupInput_schema_1.PaymentUncheckedUpdateWithoutGroupInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutGroupInput_schema_1.PaymentCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutGroupInput_schema_1.PaymentUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
