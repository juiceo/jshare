"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateOrConnectWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentCreateWithoutGroupInput_schema_1 = require("./PaymentCreateWithoutGroupInput.schema");
const PaymentUncheckedCreateWithoutGroupInput_schema_1 = require("./PaymentUncheckedCreateWithoutGroupInput.schema");
exports.PaymentCreateOrConnectWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => PaymentCreateWithoutGroupInput_schema_1.PaymentCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => PaymentUncheckedCreateWithoutGroupInput_schema_1.PaymentUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
