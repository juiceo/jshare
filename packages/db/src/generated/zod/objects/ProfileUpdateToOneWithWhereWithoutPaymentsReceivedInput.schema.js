"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUpdateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedUpdateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedUpdateWithoutPaymentsReceivedInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutPaymentsReceivedInput_schema_1.ProfileUpdateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedUpdateWithoutPaymentsReceivedInputObjectSchema)])
}).strict();
