"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutPaymentsPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUpdateWithoutPaymentsPaidInput.schema");
const ProfileUncheckedUpdateWithoutPaymentsPaidInput_schema_1 = require("./ProfileUncheckedUpdateWithoutPaymentsPaidInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutPaymentsPaidInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutPaymentsPaidInput_schema_1.ProfileUpdateWithoutPaymentsPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutPaymentsPaidInput_schema_1.ProfileUncheckedUpdateWithoutPaymentsPaidInputObjectSchema)])
}).strict();
