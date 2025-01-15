"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutPaymentsPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsPaidInput.schema");
const ProfileCreateOrConnectWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateOrConnectWithoutPaymentsPaidInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutPaymentsPaidInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsPaidInput_schema_1.ProfileCreateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedCreateWithoutPaymentsPaidInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutPaymentsPaidInput_schema_1.ProfileCreateOrConnectWithoutPaymentsPaidInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
