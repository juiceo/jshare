"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutPaymentsPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsPaidInput.schema");
exports.ProfileCreateOrConnectWithoutPaymentsPaidInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsPaidInput_schema_1.ProfileCreateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedCreateWithoutPaymentsPaidInputObjectSchema)])
}).strict();
