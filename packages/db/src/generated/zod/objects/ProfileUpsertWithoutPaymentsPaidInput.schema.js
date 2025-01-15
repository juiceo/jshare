"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutPaymentsPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUpdateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedUpdateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedUpdateWithoutPaymentsPaidInput.schema");
const ProfileCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsPaidInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutPaymentsPaidInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutPaymentsPaidInput_schema_1.ProfileUpdateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedUpdateWithoutPaymentsPaidInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsPaidInput_schema_1.ProfileCreateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedCreateWithoutPaymentsPaidInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional()
}).strict();
