"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutPaymentsReceivedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUpdateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedUpdateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedUpdateWithoutPaymentsReceivedInput.schema");
const ProfileCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsReceivedInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutPaymentsReceivedInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutPaymentsReceivedInput_schema_1.ProfileUpdateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedUpdateWithoutPaymentsReceivedInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsReceivedInput_schema_1.ProfileCreateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedCreateWithoutPaymentsReceivedInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional()
}).strict();
