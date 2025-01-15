"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneRequiredWithoutPaymentsPaidNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsPaidInput.schema");
const ProfileCreateOrConnectWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateOrConnectWithoutPaymentsPaidInput.schema");
const ProfileUpsertWithoutPaymentsPaidInput_schema_1 = require("./ProfileUpsertWithoutPaymentsPaidInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutPaymentsPaidInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutPaymentsPaidInput.schema");
const ProfileUpdateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUpdateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedUpdateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedUpdateWithoutPaymentsPaidInput.schema");
exports.ProfileUpdateOneRequiredWithoutPaymentsPaidNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsPaidInput_schema_1.ProfileCreateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedCreateWithoutPaymentsPaidInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutPaymentsPaidInput_schema_1.ProfileCreateOrConnectWithoutPaymentsPaidInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutPaymentsPaidInput_schema_1.ProfileUpsertWithoutPaymentsPaidInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutPaymentsPaidInput_schema_1.ProfileUpdateToOneWithWhereWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutPaymentsPaidInput_schema_1.ProfileUpdateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedUpdateWithoutPaymentsPaidInputObjectSchema)]).optional()
}).strict();
