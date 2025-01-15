"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneRequiredWithoutPaymentsReceivedNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsReceivedInput.schema");
const ProfileCreateOrConnectWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateOrConnectWithoutPaymentsReceivedInput.schema");
const ProfileUpsertWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUpsertWithoutPaymentsReceivedInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInput.schema");
const ProfileUpdateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUpdateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedUpdateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedUpdateWithoutPaymentsReceivedInput.schema");
exports.ProfileUpdateOneRequiredWithoutPaymentsReceivedNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsReceivedInput_schema_1.ProfileCreateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedCreateWithoutPaymentsReceivedInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutPaymentsReceivedInput_schema_1.ProfileCreateOrConnectWithoutPaymentsReceivedInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutPaymentsReceivedInput_schema_1.ProfileUpsertWithoutPaymentsReceivedInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInput_schema_1.ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutPaymentsReceivedInput_schema_1.ProfileUpdateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedUpdateWithoutPaymentsReceivedInputObjectSchema)]).optional()
}).strict();
